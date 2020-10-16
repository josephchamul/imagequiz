import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} isAuthed={true} />}
        ></Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
