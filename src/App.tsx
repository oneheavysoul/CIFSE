import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InnerPageRoutes, ROUTES } from './constants/routes';
import AboutUs from './components/Pages/About/AboutUs';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/Contact/ContactUs';
import RegularCourseP from './components/Pages/RegularCourse/RegularCourseP';
import RegularCourseDetailsPage from './components/Pages/RegularCourse/RegularCourseDetails/BscFire/RegularCourseDetailsPage';
import RegularCourseDetailOne from './components/Pages/RegularCourse/RegularCourseDetails/BscFire/RegularCourseDetailOne';
import Gallery from './components/Pages/Gallery/Gallery';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route exact path={ROUTES.aboutUs} component={AboutUs} />
          <Route exact path={ROUTES.RegularCourse} component={RegularCourseP} />
          <Route exact path={`${InnerPageRoutes.bscfire}`} component={RegularCourseDetailOne} />

          <Route exact path={ROUTES.Gallery} component={Gallery} />

          <Route exact path={ROUTES.contactUs} component={ContactUs} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
