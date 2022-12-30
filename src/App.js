import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import 'App.css';





function App() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route path="/" element={<Home/>} />
                        <Route path="/Game" element={ <Game/> } />
                        <Route path="/Store" element={ <Store/> } />
                        <Route path="/Contact" element={ <Contact/> } />
                    </Route>
                </Routes>
            </Router>

        </>
    )


}




export default App;

