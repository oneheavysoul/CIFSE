import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InnerPageRoutes, ROUTES } from './constants/routes';
import AboutUs from './components/Pages/About/AboutUs';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/Contact/ContactUs';
import RegularCourseP from './components/Pages/RegularCourse/RegularCourseP';
import RegularCourseDetailOne from './components/Pages/RegularCourse/RegularCourseDetails/BscFire/RegularCourseDetailOne';
import RegularCourseDetailTwo from './components/Pages/RegularCourse/RegularCourseDetails/DiplomaFireService/RegularCourseDetailTwo';
import RegularCourseDetailThree from './components/Pages/RegularCourse/RegularCourseDetails/ADIS12th/RegularCourseDetailThree';
import RegularCourseDetailFour from './components/Pages/RegularCourse/RegularCourseDetails/DFSE/RegularCourseDetailFour';
import RegularCourseDetailFive from './components/Pages/RegularCourse/RegularCourseDetails/ADIS/RegularCourseDetailFive';
import RegularCourseDetailSix from './components/Pages/RegularCourse/RegularCourseDetails/CFSE/RegularCourseDetailSix';
import RegularCourseDetailSeven from './components/Pages/RegularCourse/RegularCourseDetails/MBAFireSafetyManagement/RegularCourseDetailSeven';
import RegularCourseDetailEight from './components/Pages/RegularCourse/RegularCourseDetails/FOC/RegularCourseDetailEight';
import RegularCourseDetailNine from './components/Pages/RegularCourse/RegularCourseDetails/PGDFireSafety/RegularCourseDetailNine';
import RegularCourseDetailTen from './components/Pages/RegularCourse/RegularCourseDetails/MBAIndustialSafety/RegularCourseDetailTen';
import RegularCourseDetailEleven from './components/Pages/RegularCourse/RegularCourseDetails/PGDIndustrialSafety/RegularCourseDetailEleven';
import RegularCourseDetailTweleve from './components/Pages/RegularCourse/RegularCourseDetails/SafetyOfficerCourse/RegularCourseDetailTweleve';
import Gallery from './components/Pages/Gallery/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUTES.home} component={Home} />
          <Route exact path={ROUTES.aboutUs} component={AboutUs} />
          <Route exact path={ROUTES.RegularCourse} component={RegularCourseP} />
          <Route exact path={`${InnerPageRoutes.bscFire}`} component={RegularCourseDetailOne} />
          <Route exact path={`${InnerPageRoutes.diplomaFireService}`} component={RegularCourseDetailTwo} />
          <Route exact path={`${InnerPageRoutes.adis12th}`} component={RegularCourseDetailThree} />
          <Route exact path={`${InnerPageRoutes.dfse}`} component={RegularCourseDetailFour} />
          <Route exact path={`${InnerPageRoutes.adis}`} component={RegularCourseDetailFive} />
          <Route exact path={`${InnerPageRoutes.cfse}`} component={RegularCourseDetailSix} />
          <Route exact path={`${InnerPageRoutes.mbaFireSafety}`} component={RegularCourseDetailSeven} />
          <Route exact path={`${InnerPageRoutes.foc}`} component={RegularCourseDetailEight} />
          <Route exact path={`${InnerPageRoutes.pgdFiresafety}`} component={RegularCourseDetailNine} />
          <Route exact path={`${InnerPageRoutes.mbaIndustrialSafety}`} component={RegularCourseDetailTen} />
          <Route exact path={`${InnerPageRoutes.pgdIndustrialSafety}`} component={RegularCourseDetailEleven} />
          <Route exact path={`${InnerPageRoutes.soc}`} component={RegularCourseDetailTweleve} />

          <Route exact path={ROUTES.Gallery} component={Gallery} />

          <Route exact path={ROUTES.contactUs} component={ContactUs} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
