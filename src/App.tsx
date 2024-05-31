import "./App.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import HomeView from "./Pages/HomeView.tsx";
import {NotFoundView} from "./Pages/NotFoundView.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import SaveEditorView from "./Pages/SaveEditor/SaveEditorView.tsx";
import TestingView from "./Pages/Testing/TestingView.tsx";
import ModEditorView from "./Pages/ModEditor/ModEditorView.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomeView/>}/>
                    <Route path="saveEditor" element={<SaveEditorView/>}/>
                    <Route path="modEditor" element={<ModEditorView/>}/>
                    <Route path="testing" element={<TestingView/>}/>
                    <Route path="*" element={<NotFoundView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)