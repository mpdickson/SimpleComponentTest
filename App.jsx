import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SimpleComponentTest from "./components/SimpleComponentTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|simple-component-test)">
          <SimpleComponentTest
            fileCloud_Outline="https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/file---cloud-outline@2x.png"
            rectangle205="https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/rectangle-205@2x.png"
            place="Home"
            gridGrid_Round="https://anima-uploads.s3.amazonaws.com/projects/60c10787c15cc194fe0068dc/img/grid---grid-round@2x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
