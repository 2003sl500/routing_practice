import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Hello from "./components/Hello";
import BaseRoute from "./components/BaseRoute";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/:first/">
                        <BaseRoute />
                    </Route>
                    <Route exact path="/:first/:second">
                        <BaseRoute />
                    </Route>
                    <Route exact path="/:first/:second/:third">
                        <BaseRoute />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
