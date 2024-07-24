import "./index.css";
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";

export const AppRoute: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/home" element={<HomePage/>}/>
        </Routes>
    </Router>
)
