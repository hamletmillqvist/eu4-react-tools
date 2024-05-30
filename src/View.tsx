import React from "react";
import {NotFoundView} from "./Views/NotFoundView.tsx";
import {Container} from "@mui/material";
import {UrlUtil} from "./UrlUtil.ts";
import {HomeView} from "./Views/HomeView.tsx";
import {SaveEditorView} from "./Views/SaveEditor/SaveEditorView.tsx";
import {ModEditorView} from "./Views/ModEditor/ModEditorView.tsx";
import {TestingView} from "./Views/Testing/TestingView.tsx";

export class View {
    public static readonly NotFound = new View("View not found", "/404", <NotFoundView/>);
    public static readonly Home = new View("Home", "/", <HomeView/>);
    public static readonly SaveEditor = new View("Save Editor", "/saveEditor", <SaveEditorView/>);
    public static readonly ModEditor = new View("Mod Editor", "/modEditor", <ModEditorView/>);
    public static readonly Testing = new View("Testing", "/testing", <TestingView/>);

    constructor(name: string, path: string, element: React.ReactNode) {
        this.name = name;
        this.path = path;
        this.element = element;
    }

    readonly name: string;
    readonly path: string;
    readonly element: React.ReactNode;
}

export class ViewMapper {

    private static readonly map = new Map<string, View>();

    public static add = (view: View) => {
        this.map.set(view.path, view);
    };

    public static get = (view: View): View => {
        return this.getFromPath(view.path);
    };

    public static getFromPath = (path: string): View => {
        return this.map.get(path) ?? View.NotFound;
    }

    public static getKeys = () => {
        const items: string[] = [];

        for (const item in this.map.keys()) {
            items.push(item);
        }

        return items;
    }

    public static getFromUrl = () => {
        const path = UrlUtil.getPath();
        return this.getFromPath(path);
    }
}

export const ViewRouter = ({}: {}) => {
    const view = ViewMapper.getFromUrl();
    return (
        <Container>
            <h1>{view.name}</h1>
            {view.element}
        </Container>
    );
}