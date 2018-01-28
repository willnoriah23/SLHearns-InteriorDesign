import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Questionaire from "./pages/Questionaire";
import Portfolio from "./pages/Portfolio";
<<<<<<< HEAD
import AdminUsers from "./components/AdminUsers"
=======
import Services from "./pages/Services";
import Contact from "./pages/Contact";
>>>>>>> 44d4a50f00b3d7a83bb9b3b7ee2744a46e468091

const App = () =>

    <Router>
      <div>
          <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/questions" component={Questionaire} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          {/*<Route component={NoMatch} />*/}
        </Switch>
      </div>
    </Router>;

export default App;
