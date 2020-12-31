// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import NoMatch from './pages/NoMatch;';

function App() {
  return (
    < Router>
      <div>
        < Header/>
          < Switch>
            < Route exact path="/" component={About} />
            < Route exact path="/about" component={About} />
            < Route exact path="/resume" component={Resume} />
            < Route exact path="/portfolio" component={Portfolio} />
            < Route exact path="/contact" component={Contact} />
            {/* < Route component={NoMatch} /> */}
          </Switch>
        < Footer/>
      </div>
    </Router>



    // <div>
    //   <>
    //   < Header />
    //   </>
    //   <>
    //   < BioCard />
    //   </>
    //   <>
    //   < Footer />
    //   </>
    // </div>
  );
}

export default App;
