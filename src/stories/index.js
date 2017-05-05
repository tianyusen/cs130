import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import AgeDoughnutChart from './data_charts';
import PatientCard from './PatientCard';
import UploadForm from './UploadForm';
import '../styleSheet/bootstrap/css/bootstrap.css';
import '../styleSheet/font-awsome/css/font-awesome.css';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Charts', module)
  .add('Age Doughnut Chart', () => (
    <AgeDoughnutChart/>
  ));

storiesOf('PatientCard', module)
  .add('PatientCardExample', () => (
    <PatientCard/>
  ))

storiesOf('UploadForm', module)
  .add('UploadFormExample', () => (
    <UploadForm/>
  ))