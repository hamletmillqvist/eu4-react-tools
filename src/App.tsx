import "./App.css"

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Pages/Layout.tsx";
import HomeView from "./Pages/Home/HomeView.tsx";
import {NotFoundView} from "./Pages/NotFound/NotFoundView.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import ModEditorView from "./Pages/ModEditor/ModEditorView.tsx";
import SaveEditorView from "./Pages/SaveEditor/SaveEditorView.tsx";
import TestingView from "./Pages/Testing/TestingView.tsx";
import AppAlerter from "./AppAlerter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="/eu4-react-tools/" element={<Layout/>}>
                        <Route index element={<HomeView/>}/>
                        <Route path="saveEditor" element={<SaveEditorView/>}/>
                        <Route path="modEditor" element={<ModEditorView/>}/>
                        <Route path="testing" element={<TestingView/>}/>
                        <Route path="*" element={<NotFoundView/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>

        <AppAlerter/>
    </React.StrictMode>,
)