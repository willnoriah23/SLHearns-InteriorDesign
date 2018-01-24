import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Questionaire from "./pages/Questionaire";
import Portfolio from "./pages/Portfolio";
// import Transition from "./pages/Transition";

const App = () =>

    <Router>
      <div>
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/questions" component={Questionaire} />
          <Route exact path="/portfolio" component={Portfolio} />
          {/*<Route exact path="/transition" component={Transition} />*/}

          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>;

export default App;
