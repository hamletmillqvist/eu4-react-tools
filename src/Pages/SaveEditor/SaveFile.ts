import Scope from "./Scope.ts";

export class SaveFile {
    constructor(name: string, rootScope: Scope) {
        this.name = name;
        this.rootScope = rootScope;
    }

    name: string;
    rootScope: Scope;
}