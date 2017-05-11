import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import AgeDoughnutChart from '../Components/data_charts';
import NameCard from '../Pages/PatientsRecord/NameCard';
import UploadForm from '../Components/UploadForm';
import Login from '../Pages/LoginPage/Login';
import Add from '../Components/Add';
import SearchBar from '../Components/SearchBar';
import '../styleSheet/bootstrap/css/bootstrap.css';
import '../styleSheet/font-awsome/css/font-awesome.css';


storiesOf('Charts', module)
  .add('Age Doughnut Chart', () => (
    <AgeDoughnutChart/>
  ));

storiesOf('NameCard', module)
  .add('NameCardExample', () => (
    <NameCard/>
  ))

storiesOf('UploadForm', module)
  .add('UploadFormExample', () => (
    <UploadForm/>
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