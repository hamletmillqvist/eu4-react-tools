import SaveFile from "Types/SaveFile";
import Scope from "Types/Scope.ts";

export class ParseResult {
    errorText?: string;
    saveFile?: SaveFile;
}

export default class SaveFileUtil {
    public static parse = async (file: File): Promise<ParseResult> => {
        const result = new ParseResult();

        if (!file.name.endsWith(".eu4")) {
            result.errorText = "Error: File could not be loaded. Make sure it is an actual save file and that it is not compressed.";
            return result;
        }

        const text = await file.text()

        const lines = text.split('\n');

        if (lines[0] != "EU4txt") {
            result.errorText = "Error: File is missing the 'EU4txt' header. Please upload an eu4 save file."
            return result;
        }

        const root = new Scope("root", 0);
        let currentScope: Scope = root;

        for (const lineRaw of lines.slice(1)) {
            const line = lineRaw.trim();

            if (line.endsWith("{")) {
                let [name] = line.split("=");

                if (!line.includes("=")) {
                    name = "[object]";
                }

                const scope = new Scope(name, currentScope.depth + 1, currentScope);
                currentScope.childScopes.push(scope);

                currentScope = scope;
            } else if (line == "}" && currentScope.parent != null) {
                currentScope = currentScope.parent;
            } else if (line.includes("=")) {
                const [name, value] = line.split('=');
                currentScope.setVariable(name, value);
            } else if (line.length > 0) {
                currentScope.setVariable(line, null);
            }
        }

        if (root.childScopes.length > 0) {
            result.saveFile = new SaveFile(file.name, root);
            return result;
        }

        result.errorText = "Error: Unspecified reason"
        return result;
    }
}