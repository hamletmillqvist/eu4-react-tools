import {ISaveFile} from "./SaveFile.ts";

export class ParseResult {
    errorText?: string;
    saveFile?: ISaveFile;
}

export class SaveFileUtil {
    public static parse = async (file: File): Promise<ParseResult> => {
        const result = new ParseResult();

        if (!file.name.endsWith(".eu4")) {
            result.errorText = "Error: File could not be loaded. Make sure it is an actual save file and that it is not compressed.";
            return result;
        }

        const text = await file.text()

        const lines = text.split('\n');

        if (lines[0] != "EU4txt") {
            result.errorText = "Error: File is missing the 'Eu4text' header. Please upload an eu4 save file."
            return result;
        }
        
        // todo: we need some datatypes, pdx-script has weird ways of handling variables/lists/dictionaries

        result.errorText = "Error: Unspecified reason"
        return result;
    }
}