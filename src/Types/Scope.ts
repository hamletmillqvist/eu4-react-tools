import ScopeVariable from "Types/ScopeVariable.ts";

export default class Scope {
    constructor(name: string, depth: number, parentScope?: Scope) {
        this.name = name;
        this.depth = depth;
        this.parent = parentScope;
    }

    name: string;
    depth: number;
    parent?: Scope;

    childScopes: Scope[] = [];
    private variables: Map<string, string | null> = new Map<string, string | null>();

    setVariable = (name: string, value: string | null) => {
        this.variables.set(name, value);
    }

    getVariables = (): ScopeVariable[] => {
        const variables: ScopeVariable[] = [];

        this.variables.forEach((value, name) =>
            variables.push(new ScopeVariable(name, value, this)));

        return variables;
    }
}