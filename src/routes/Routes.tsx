import "./index.css";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { GenerateGradient } from "../pages/generateGradient/GenerateGradient";

export const AppRoute: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/generate-gradient" element={<GenerateGradient/>}/>
        </Routes>
    </Router>
)
