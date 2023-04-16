import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { InnerPageRoutes, ROUTES } from './constants/routes';
import AboutUs from './components/Pages/About/AboutUs';
import Home from './components/Pages/Home/Home';
import ContactUs from './components/Pages/Contact/ContactUs';
import RegularCourseP from './components/Pages/RegularCourse/RegularCourseMainPage';
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

import DistanceCourseP from './components/Pages/DistanceCourse/DistanceCourseMainPage';
import DCDetailOne from './components/Pages/DistanceCourse/DistanceCourseDetails/ADIEHS/DCDetailOne';
import DCDetailTwo from './components/Pages/DistanceCourse/DistanceCourseDetails/ADFIES/DCDetailTwo';
import DCDetailThree from './components/Pages/DistanceCourse/DistanceCourseDetails/DFSIM/DCDetailThree';
import DCDetailFour from './components/Pages/DistanceCourse/DistanceCourseDetails/ADIES/DCDetailFour';
import DCDetailFive from './components/Pages/DistanceCourse/DistanceCourseDetails/DDM/DCDetailFive';
import DCDetailSix from './components/Pages/DistanceCourse/DistanceCourseDetails/DHSEM/DCDetailSix';
import DCDetailSeven from './components/Pages/DistanceCourse/DistanceCourseDetails/DFSM/DCDetailSeven';
import DCDetailEight from './components/Pages/DistanceCourse/DistanceCourseDetails/PGFSM/DCDetailEight';
import DCDetailNine from './components/Pages/DistanceCourse/DistanceCourseDetails/DISM/DCDetailNine';
import DCCourseDetailTen from './components/Pages/DistanceCourse/DistanceCourseDetails/MBA/DCCourseDetailTen';
import DCDetailEleven from './components/Pages/DistanceCourse/DistanceCourseDetails/PGISM/DCDetailEleven';
import DCDetailTweleve from './components/Pages/DistanceCourse/DistanceCourseDetails/PGHSE/DCDetailTweleve';

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

          <Route exact path={ROUTES.DistanceCourse} component={DistanceCourseP} />
          <Route exact path={`${InnerPageRoutes.adiehs}`} component={DCDetailOne} />
          <Route exact path={`${InnerPageRoutes.adfies}`} component={DCDetailTwo} />
          <Route exact path={`${InnerPageRoutes.dfsim}`} component={DCDetailThree} />
          <Route exact path={`${InnerPageRoutes.adies}`} component={DCDetailFour} />
          <Route exact path={`${InnerPageRoutes.ddm}`} component={DCDetailFive} />
          <Route exact path={`${InnerPageRoutes.dhsem}`} component={DCDetailSix} />
          <Route exact path={`${InnerPageRoutes.dfsm}`} component={DCDetailSeven} />
          <Route exact path={`${InnerPageRoutes.pgfsm}`} component={DCDetailEight} />
          <Route exact path={`${InnerPageRoutes.dism}`} component={DCDetailNine} />
          <Route exact path={`${InnerPageRoutes.mba}`} component={DCCourseDetailTen} />
          <Route exact path={`${InnerPageRoutes.pgism}`} component={DCDetailEleven} />
          <Route exact path={`${InnerPageRoutes.pghse}`} component={DCDetailTweleve} />

          <Route exact path={ROUTES.Gallery} component={Gallery} />

          <Route exact path={ROUTES.contactUs} component={ContactUs} />
        </Switch >
      </BrowserRouter >
    </>
  );
}

export default App;
