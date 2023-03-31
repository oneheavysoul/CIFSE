import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from './constants/routes';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import Home from './components/Pages/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route exact path={ROUTES.aboutUs} component={AboutUs} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
