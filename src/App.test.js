import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBar from './Components/SearchBar';
import Add from './Components/Add';
import Logo from './Components/Logo';
import DoctorUpdate from './Components/doctor_update';
import LargePatientCard from './Components/large_patient_card';
import PatientSignUp from './Components/patient_sign_up';
import Login from './Pages/LoginPage/Login';

import Demography from './Pages/Demography';
import LoginPage from './Pages/LoginPage';
import PatientOverView from './Pages/PatientOverView';
import PatientsRecord from './Pages/PatientsRecord';

import axios from 'axios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

/*
  Smoke test
*/

it('render Search Bar', () => {
  shallow(<SearchBar />);
});

it('render Add', () => {
  shallow(<Add />);
});

it('render Logo', () => {
  shallow(<Logo />);
});


// it('render DoctorUpdate', () => {
//   shallow(<DoctorUpdate />);
// });

it('render LargePatientCard', () => {
  shallow(<LargePatientCard />);
});

it('render LargePatientCard', () => {
  shallow(<PatientSignUp />);
});

/*
Integration test 
*/
it('Page Demography', () => {
  shallow(<Demography />);
});

it('Page LoginPage', () => {
  shallow(<LoginPage />);
});

it('Page PatientOverView', () => {
  shallow(<PatientOverView />);
});

it('Page PatientsRecord', () => {
  shallow(<PatientsRecord />);
});


/*
  Logic testing
*/
test('Fetch patient records from back-end', () => {

  axios.get('http://localhost:9000/patients', {
            //headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
            })
            .then((response)=>{
                //do soemthign with respnse
                 expect(response.data).toEqual(expect.any(Array));
            })
            .catch(function(error) {
        
        });
});

test('Fetch patient data from back-end', () => {

  axios.get('http://localhost:9000/patients', {
            //headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')},
            })
            .then((response)=>{
                //do soemthign with respnse
                 expect(response.data).toEqual(expect.any(Array));
            })
            .catch(function(error) {
        
        });
});

// Component: login
describe('<LoginPage/>', () => {
  it('LoginPage renders one <Login /> components', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find(Login)).to.have.length(1);
  });

  // it('Login component renders login and register button when passed in', () => {
  //   const wrapper = shallow(
  //     <Login/>
  //   );
  //   expect(wrapper.find("login-form-link")).to.have.length(1);
  // });


  it('Login simulate click login event', () => {
    const wrapper = shallow(<Login />);
    // expect(wrapper.find(Login)).to.have.length(1);
  });

  it('Login simulate click register event', () => {
    const wrapper = shallow(<LoginPage />);
    // expect(wrapper.find(Login)).to.have.length(1);
  });
   
});

// Login test

// Patient Record Test
// Patient Overview Test