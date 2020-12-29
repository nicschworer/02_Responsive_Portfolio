// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import BioCard from "./components/bioCard";
import ResumeCard from "./components/ResumeCard";
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    < Router>
      <div>
        < Header/>
        < Switch>
        < Route exact path="/" component={BioCard} />
        < Route exact path="/about" component={BioCard} />
        < Route exact path="/resume" component={ResumeCard} />
        < Route exact path="/portfolio" component={Portfolio} />
        < Route exact path="/contact" component={Contact} />



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
