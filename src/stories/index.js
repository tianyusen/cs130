import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import PatientCard from './PatientCard';
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

storiesOf('PatientCard', module)
  .add('PatientCardExample', () => (
    <PatientCard/>
  ))
