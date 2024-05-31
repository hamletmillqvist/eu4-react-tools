export class Scope {
    constructor(name: string, parentScope?: Scope) {
        this.name = name;
        this.parent = parentScope;
    }

    name: string;
    parent?: Scope;

    childScopes: Scope[] = [];
}