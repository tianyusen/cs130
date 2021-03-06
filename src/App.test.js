import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import SearchBar from './Components/SearchBar';
import Add from './Components/Add';
import Logo from './Components/Logo';
import DoctorUpdate from './Components/doctor_update';
import DoctorUpdateDR from './Components/doctor_update_DR';
import DoctorUpdateDrugs from './Components/doctor_update_drugs';
import DrugEdit from './Components/drug_edit';
import LargePatientCard from './Components/large_patient_card';
import PatientSignUp from './Components/patient_sign_up';
import Login from './Pages/LoginPage/Login';
import Logout from './Components/logout';
import NameCard from './Pages/PatientsRecord/NameCard';

import PatientUpdate from './Components/patient_update';
import Demography from './Pages/Demography';
import LoginPage from './Pages/LoginPage';
// import PatientOverView from './Pages/PatientOverView';
import PatientsRecord from './Pages/PatientsRecord';
import axios from 'axios';
import NewRecordCard from './Components/new_record_card';

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

it('Page PatientsRecord', () => {
  shallow(<PatientsRecord />);
});


/*
  Logic testing
*/

  
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
  
  it.skip('Page PatientOverView', () => {
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

    it('Login render login and register buttons and clicking button renders the correct form', () => {
        const wrapper = mount(<Login />);
        expect(wrapper.find('#login-form-link')).to.have.length(1);
        expect(wrapper.find('#register-form-link')).to.have.length(1);
        sinon.spy(wrapper.instance(), 'handleAuthActionSwitch');
        wrapper.find('#login-form-link').simulate('click');
        wrapper.find('#register-form-link').simulate('click');
        expect(wrapper.instance().handleAuthActionSwitch).to.have.property('callCount', 2);
      });
    
    it('simulates click login as patient events: directs to patient page', () => {
        const onButtonClick = sinon.spy();
        const wrapper = mount(
          <Login PatientSignOut={onButtonClick}/>
        );
        wrapper.setState({auth_action: 'login'});
        expect(wrapper.find('#signin-form')).to.have.length(1);
        wrapper.find('#login-patient').simulate('click');
        expect(onButtonClick).to.have.property('callCount', 1);
      });

    it('simulates click login as doctor events: directs to doctor page', () => {
      const onButtonClick = sinon.spy();
      const wrapper = mount(
        <Login DoctorSignOut={onButtonClick}/>
      );
      wrapper.setState({auth_action: 'login'});
      expect(wrapper.find('#signin-form')).to.have.length(1);
      wrapper.find('#login-doctor').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });
    it('simulates click register as doctor events: directs to doctor page', () => {
      const onButtonClick = sinon.spy();
      const wrapper = mount(
        <Login RegisterSignOut={onButtonClick}/>
      );
      wrapper.setState({auth_action: 'register'});
      expect(wrapper.find('#register-form')).to.have.length(1);
      wrapper.find('#register').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    });

 });
// Patient Record Test
describe('<PatientsRecord />', () => {
  it('PatientsRecord renders one <Logo /> components', () => {
    const wrapper = shallow(<PatientsRecord />);
    expect(wrapper.find(Logo)).to.have.length(1);
  });

  it('PatientsRecord renders one <Add /> components', () => {
    const wrapper = shallow(<PatientsRecord />);
    expect(wrapper.find(Add)).to.have.length(1);
  });

  it('PatientsRecord renders one <SearchBar /> components', () => {
    const wrapper = shallow(<PatientsRecord />);
    expect(wrapper.find(SearchBar)).to.have.length(1);
  });

  it('PatientsRecord renders one <Logout /> components', () => {
    const wrapper = shallow(<PatientsRecord />);
    expect(wrapper.find(Logout)).to.have.length(1);
  });


  it('<Logout /> can Logout successfully on button click', () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(
      <Logout GeneralLogout={onButtonClick}/>
    );
    wrapper.find('#logout-button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('<NameCard /> has correct components.', () => {
    const blood_sugar = 80;
    const blood_fat = 120;
    const blood_pressure = 100;
    const wrapper = mount(
      <NameCard 
        blood_sugar={blood_sugar}
        blood_fat={blood_fat}
        blood_pressure={blood_pressure}
      />
    );
    expect(wrapper.find('#userphoto')).to.have.length(1);
    expect(wrapper.find('#username')).to.have.length(1);
    expect(wrapper.find('#userbirthday')).to.have.length(1);
    expect(wrapper.find('#userage')).to.have.length(1);
    expect(wrapper.find('#userbp')).to.have.length(1);
    expect(wrapper.find('#userbf')).to.have.length(1);
    expect(wrapper.find('#userbs')).to.have.length(1);
    
  });

  

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

  describe('PatientUpdate Popup', () => {
  it('has 4 input fields', () => {

    const wrapper = shallow(<PatientUpdate />);
    expect(wrapper.find('input')).to.have.length(4);
    expect(wrapper.find('[name="blood_sugar"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_fat"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_pressure_low"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_pressure_high"]')).to.have.length(1);
  });

  it('has working Cancel button', () => {
    var count = 0;
    function inc(){count+=1;}
    const wrapper = mount(<PatientUpdate DoctorUpdateForm={inc} />);
    expect(wrapper.find('i.UpdatePForm-Title-Cancel-i')).to.have.length(1);
    wrapper.find('i.UpdatePForm-Title-Cancel-i').simulate('click');
    expect(count==1);

  });

  it('has working Update button', () => {
    const wrapper = mount(<PatientUpdate />);
    expect(wrapper.find('div.UpdatePForm-Submit')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "postNewData");
    wrapper.update();
    wrapper.find('div.UpdatePForm-Submit').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });
});


});

describe('PatientSignUp Popup', () => {
  it('has 6 input fields', () => {
    const wrapper = shallow(<PatientSignUp />);
    expect(wrapper.find('input')).to.have.length(6);
    expect(wrapper.find('[name="personal_id"]')).to.have.length(1);
    expect(wrapper.find('[name="pass_word"]')).to.have.length(1);
    expect(wrapper.find('[name="name"]')).to.have.length(1);
    expect(wrapper.find('[name="birthday"]')).to.have.length(1);
    expect(wrapper.find('[name="height"]')).to.have.length(1);
    expect(wrapper.find('[name="weight"]')).to.have.length(1);
  });

  it('has working Cancel button', () => {
    var count = 0;
    function inc(){count+=1;}
    const wrapper = mount(<PatientSignUp patientSignUp={inc} />);
    expect(wrapper.find('i.SignupForm-Title-Cancel-i')).to.have.length(1);
    wrapper.find('i.SignupForm-Title-Cancel-i').simulate('click');
    expect(count==1);
  });

  it('has working Update button', () => {
    const wrapper = mount(<PatientSignUp />);
    expect(wrapper.find('div.SignupForm-Submit')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "postNewPatient");
    wrapper.update();
    wrapper.find('div.SignupForm-Submit').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

});



    describe('DoctorUpdate Popup', () => {
  it('has 6 input fields + 4 fixed fields + 3 subpage buttons', () => {
    const wrapper = shallow(<DoctorUpdate />);
    expect(wrapper.find('div.UpdateDForm-FixedItem')).to.have.length(4);
    expect(wrapper.find('input')).to.have.length(6);
    expect(wrapper.find('[name="blood_sugar"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_fat"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_pressure_low"]')).to.have.length(1);
    expect(wrapper.find('[name="blood_pressure_high"]')).to.have.length(1);
    expect(wrapper.find('[name="height"]')).to.have.length(1);
    expect(wrapper.find('[name="weight"]')).to.have.length(1);
    expect(wrapper.find('#DBleft')).to.have.length(1);
    expect(wrapper.find('#DBright')).to.have.length(1);
    expect(wrapper.find('#Prescription')).to.have.length(1);
  });

  it('has working Cancel button', () => {
    var count = 0;
    function inc(){count+=1;}
    const wrapper = mount(<DoctorUpdate DoctorUpdateForm={inc} />);
    expect(wrapper.find('i.UpdateDForm-Title-Cancel-i')).to.have.length(1);
    wrapper.find('i.UpdateDForm-Title-Cancel-i').simulate('click');
    expect(count==1);
  });

  it('has working Update button', () => {
    const wrapper = mount(<DoctorUpdate />);
    expect(wrapper.find('div.UpdateDForm-Submit')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "postUpdate");
    wrapper.update();
    wrapper.find('div.UpdateDForm-Submit').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

    it('has working Prescription button', () => {
    const wrapper = mount(<DoctorUpdate />);
    expect(wrapper.find('#Prescription')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "prescriptionClick");
    wrapper.update();
    wrapper.find('#Prescription').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

    it('has working DRleft button', () => {
    const wrapper = mount(<DoctorUpdate />);
    expect(wrapper.find('#DBleft')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "DBleftClick");
    wrapper.update();
    wrapper.find('#DBleft').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

    it('has working DRright button', () => {
    const wrapper = mount(<DoctorUpdate />);
    expect(wrapper.find('#DBright')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "DBrightClick");
    wrapper.update();
    wrapper.find('#DBright').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

});


 
    describe('DoctorUpdateDR ', () => {
  it('has 2 input fields + 1 textarea + 1 dropzone', () => {
    const wrapper = shallow(<DoctorUpdateDR />);
    expect(wrapper.find('input')).to.have.length(2);
    expect(wrapper.find('textarea')).to.have.length(1);
    expect(wrapper.find('[name="score"]')).to.have.length(1);
    expect(wrapper.find('[name="link"]')).to.have.length(1);
    expect(wrapper.find('PicDropzone')).to.have.length(1);
  });

  it('has working Cancel button', () => {
    var count = 0;
    function inc(){count+=1;}
    const wrapper = mount(<DoctorUpdateDR cancelBack={inc} />);
    expect(wrapper.find('i.DRForm-Title-Cancel-i')).to.have.length(1);
    wrapper.find('i.DRForm-Title-Cancel-i').simulate('click');
    expect(count==1);
  });

  it('has working Update button', () => {
    const wrapper = mount(<DoctorUpdateDR />);
    expect(wrapper.find('div.DRForm-Submit')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "submitClick");
    wrapper.update();
    wrapper.find('div.DRForm-Submit').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

});

 describe('DoctorUpdateDrugs ', () => {
  it('has 1 input fields + 1 textarea', () => {
    var v = [];
    v["drug_use"] = [];
    const wrapper = shallow(<DoctorUpdateDrugs visits={v}/>);
    expect(wrapper.find('input')).to.have.length(1);
    expect(wrapper.find('textarea')).to.have.length(1);
  });

  it('has working Cancel button', () => {
    var v = [];
    v["drug_use"] = [];
    
    var count = 0;
    function inc(){count+=1;}
    const wrapper = mount(<DoctorUpdateDrugs cancelBack={inc} visits={v}/>);
    expect(wrapper.find('i.Prescription-Title-Cancel-i')).to.have.length(1);
    wrapper.find('i.Prescription-Title-Cancel-i').simulate('click');
    expect(count==1);
  });

  it('has working Update button', () => {
    var v = [];
    v['drug_use'] = [];
    const wrapper = mount(<DoctorUpdateDrugs visits={v}/>);
    expect(wrapper.find('div.Prescription-Submit')).to.have.length(1);
    var spy = sinon.spy(wrapper.instance(), "submitClick");
    wrapper.update();
    wrapper.find('div.Prescription-Submit').simulate('click');
    expect(spy.called) //adept assertion to the tool you use
  });

});

