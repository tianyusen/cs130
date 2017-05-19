import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import DoughnutChart from '../Components/data_charts/doughnut';
import BloodStatLineChart from '../Components/data_charts/line';
import LargeNameCard from '../Components/large_patient_card';
import NameCard from '../Pages/PatientsRecord/NameCard';
import PatientSignUp from '../Components/patient_sign_up';
import PatientUpdate from '../Components/patient_update';
import DoctorUpdate from '../Components/doctor_update';
import Login from '../Pages/LoginPage/Login';
import Add from '../Components/Add';
import SearchBar from '../Components/SearchBar';
import '../styleSheet/bootstrap/css/bootstrap.css';
import '../styleSheet/font-awsome/css/font-awesome.css';


storiesOf('Charts', module)
  .add('Age Doughnut Chart', () => (
    <DoughnutChart/>
  ));


storiesOf('Charts', module)
  .add('Blood Line Chart', () => (
    <BloodStatLineChart/>
  ));

storiesOf('NameCard', module)
  .add('NameCardExample', () => (
    <NameCard
      name='xiaomin'
      id='1323123'
      birthday="1995/11/24"
      age={18}
      blood_sugar={0.5}
      blood_fat={0.4}
      blood_pressure_high={180}
      blood_pressure_low={70}
    />
  ))

storiesOf('NameCard', module)
  .add('Large Namecard', () => (
    <LargeNameCard/>
  ))


  storiesOf('PatientSignUp', module)
  .add('PatientSignUp', () => (
    <PatientSignUp/>
  ))

  storiesOf('PatientUpdate', module)
  .add('PatientUpdate', () => (
    <PatientUpdate/>
  ))

  storiesOf('DoctorUpdate', module)
  .add('DoctorUpdate', () => (
    <DoctorUpdate/>
  ))
  

storiesOf('Login', module)
  .add('Login', () => (
    <Login/>
))

storiesOf('SearchBar', module)
  .add('SearchBar Example', ()=>(
    <SearchBar/>
))

storiesOf('Add Button', module)
  .add('Example', ()=>(
    <Add/>
))