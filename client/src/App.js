//DEPENDENCIES
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import { Card } from 'reactstrap';
//PAGES
import LandingPage from './components/views/pages/LandingPage';
import BloodDetailPage from './components/views/pages/BloodDetailPage';
import DonorForm from './components/views/pages/DonorForm';
import MedCenter from './components/views/pages/MedCenter';

//PAGE SECTIONS
import NavBar from './components/views/pages/NavBar';
import Footer from './components/views/pages/Footer';


//DASHBOARD
import UserDashBoard from './components/views/Dashboard/UserDashBoard';
import RegCompletion from './components/views/Dashboard/RegCompletion';




export default function App() {

  const { isLoading, error, user } = useAuth0();

  useEffect(() => {
    if (user) {

      console.log(user)

    }
    else {

      <div className='container d-flex justify-content-center align-items-center'>
        <Card>
          Loading ...
  </Card>
      </div>
    }
  }, [user])

  if (isLoading)
    <div className='container d-flex justify-content-center align-items-center'>
      <Card>
        Loading ...
  </Card>
    </div>

  if (error) {
    console.log(error)
    return (<div> <Card color="danger">
      <p>opps.....{error.message}</p>
    </Card>
    </div>)
  }

  return (
    <Router>
      <NavBar />
      <div className="d-flex h-75">
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blood_details" component={BloodDetailPage} />
            <Route path="/med-center" component={RegCompletion} />
            <Route path="/:userId/form" component={DonorForm} />
            {/* <Route path="/med-center" component={MedCenter} /> */}
            <Route path="/callback" component={UserDashBoard} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>


  );
}


