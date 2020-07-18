import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Main from "./view/main";
import Rank from "./view/rank";
import QuizCategory from "./view/quiz_category";
import Quiz from "./view/quiz";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/rank" component={Rank} />
        <Route path="/quiz-category" component={QuizCategory} />
        <Route path="/quiz" component={Quiz} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
