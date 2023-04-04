import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from './constants/routes';
import AboutUs from './components/Pages/About/AboutUs';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/Contact/ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route exact path={ROUTES.aboutUs} component={AboutUs} />
          <Route exact path={ROUTES.contactUs} component={ContactUs} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
