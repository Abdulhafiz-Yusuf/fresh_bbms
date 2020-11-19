//DEPENDENCIES
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

//PAGES
import LandingPage from './views/LandingPage';
import BloodDetailPage from './views/BloodDetailPage';
import DonorForm from './views/DonorForm';
import MedCenter from './views/MedCenter';

//PAGE SECTIONS
import NavBar from './views/NavBar';
import Footer from './views/Footer';




function App() {


  const { isLoading, error } = useAuth0();

  // useEffect(() => {
  //   axios.get('http://localhost:9000/test')
  //     .then(res => setApi(res.data))
  //     .catch(err => console.log(err.message)
  //     )
  // }, [])

  if (isLoading) return <div>Loading.....</div>

  if (error) {
    console.log(error)
    return <div> opps.....{error.message}</div>
  }

  return (
    <Router>
      <NavBar />
      <div className="d-flex h-100">
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/blood_details" component={BloodDetailPage} />
            <Route path="/:userId/form" component={DonorForm} />
            <Route path="/med-center" component={MedCenter} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>


  );
}

export default App;
