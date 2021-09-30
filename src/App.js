import { Route, BrowserRouter } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

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
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper large-content"
        >
            <Route path="/" exact component={Home}></Route>
            <Route path="/aboutme" exact component={AboutMe}></Route>
            <Route path="/projects" exact component={Projects}></Route>
            <Route path="/services" exact component={Services}></Route>
            <Route path="/contact" exact component={Contact}></Route>
        </AnimatedSwitch>
      </div>
    </BrowserRouter>
  );
}


