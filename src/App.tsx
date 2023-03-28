import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ROUTES } from './constants/routes';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
