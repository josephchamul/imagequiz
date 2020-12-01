import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";
import Quiz_1 from "./components/Quiz_1";
import Quiz_2 from "./components/Quiz_2";
import Quiz_3 from "./components/Quiz_3";

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
        <Route path="/quiz1">
          <Quiz_1 />
        </Route>
        <Route path="/quiz2">
          <Quiz_2 />
        </Route>
        <Route path="/quiz3">
          <Quiz_3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
