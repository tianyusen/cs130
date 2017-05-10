import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'
import LoginPage from './Pages/LoginPage';
import PatientOverView from './Pages/PatientOverView';
import Demography from './Pages/Demography';
import PatientsRecord from './Pages/PatientsRecord';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path="/" component={LoginPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/patientoverview" component={PatientOverView}/>
          <Route path="/Demography" component={Demography}/>
          <Route path="/patientsrecord" component={PatientsRecord}/>
      </Router>
    );
  }
}

export default App;
