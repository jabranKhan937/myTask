import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./Components/Home";
import AddJob from "./Components/Addjob";
import EditJob from "./Components/Editjob";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addjob" component={AddJob} />
          <Route exact path="/editjob/:id" component={EditJob} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
