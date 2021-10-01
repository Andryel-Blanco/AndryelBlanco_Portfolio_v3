import { Route, BrowserRouter, Switch} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

import Home from './pages/Home/index';
import AboutMe from './pages/AboutMe/index';
import Projects from './pages/Projects/index';
import Services from './pages/Services/index';
import Contact from './pages/Contact/index';
import TopBar from "./components/TopBarNavigation";


import './styles/app.scss';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <TopBar/>
        <div className='mobile-content' >
          <Home/>
          <AboutMe/>
          <Projects/>
          <Services/> 
          <Contact/>
        </div>
        <AnimatePresence exitBeforeEnter>
          <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/aboutme" exact component={AboutMe}></Route>
              <Route path="/projects" exact component={Projects}></Route>
              <Route path="/services" exact component={Services}></Route>
              <Route path="/contact" exact component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}


