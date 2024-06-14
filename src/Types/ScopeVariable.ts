import Scope from "Types/Scope.ts";

export default class ScopeVariable {
    constructor(name: string, value: string | null, scope: Scope) {
        this.name = name;
        this.value = value;
        this.scope = scope;
    }

    static clone = (other: ScopeVariable): ScopeVariable => {
        return new ScopeVariable(other.name, other.value, other.scope);
    }

    name: string;
    value: string | null;
    scope: Scope;

    get evaluatedName() {
        const scopeNames: string[] = [];
        let currentScope: Scope | undefined = this.scope;

        while (currentScope) {
            scopeNames.push(currentScope.name);
            currentScope = currentScope.parent;
        }

        let name = "";

        for (let i = scopeNames.length - 1; i >= 0; i--) {
            name += scopeNames[i] + ".";
        }

        name += this.name;
        return name;
    }
}