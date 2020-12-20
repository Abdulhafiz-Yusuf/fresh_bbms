//DEPENDENCIES
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'

//PAGES
import LandingPage from './components/views/LandingPage';
import BloodDetailPage from './components/views/BloodDetailPage';
import DonorForm from './components/views/DonorForm';
import MedCenter from './components/views/MedCenter';
import UserDashBoard from './components/views/Dashboard/UserDashBoard';
//PAGE SECTIONS
import NavBar from './components/views/NavBar';
import Footer from './components/views/Footer';
import { Card } from 'reactstrap';
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


