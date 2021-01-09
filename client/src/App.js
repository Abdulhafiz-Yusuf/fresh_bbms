//DEPENDENCIES
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'reactstrap';
//PAGES
import LandingPage from './components/views/pages/LandingPage';
import BloodDetailPage from './components/views/pages/BloodDetailPage';
import DonorForm from './components/views/pages/DonorForm';
import MedCenter from './components/views/pages/MedCenter';

//PAGE SECTIONS
import NavBar from './components/views/pages/sections/NavBar';
import Footer from './components/views/pages/sections/Footer';


//DASHBOARD
import UserDashBoard from './components/views/Dashboard/UserDashBoard';



/*=====
APP.JS
=======*/
export default function App() {

  const { isLoading, error } = useAuth0();
  isLoading &&
    <div className='container d-flex justify-content-center align-items-center h-75'>
      <Card>
        <h2>Loading .... </h2>
      </Card>
    </div>


  error &&
    < div className='container d-flex justify-content-center align-items-center h-75' >
      <Card>
        <h2>{error} </h2>
      </Card>
    </div >

  return (<>

    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/blood_details/:bgId" component={BloodDetailPage} />
        <Route path="/:userId/form" component={DonorForm} />
        <Route path="/med-center" component={MedCenter} />
        <Route path="/callback" component={UserDashBoard} />
        <Route path="/testPage" component={UserDashBoard} />
      </Switch>
      <Footer />
    </Router>

  </>

  );
}


