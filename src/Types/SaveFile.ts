import Scope from "Types/Scope";

export default class SaveFile {
    constructor(name: string, rootScope: Scope) {
        this.name = name;
        this.rootScope = rootScope;
    }

    name: string;
    rootScope: Scope;
}