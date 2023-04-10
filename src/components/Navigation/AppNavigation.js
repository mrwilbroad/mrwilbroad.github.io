import React from 'react'
import { Container } from 'react-bootstrap';
import tz_logo from "./../../Resources/images/uhuru_umoja.png";
import hospiLogo from "./../../Resources/images/hospital_logo.png";
import NavHeader from './NavHeader';

const AppNavigation = () => {

    const country = "The United Republic of tanzania";
    const hospital_name = "MTONGANI MEMORIAL HOSPITAL CENTER";

return (
        <React.Fragment>
          <Container id='app-top-header' 
        className='text-center m-0 p-0 bg-light d-flex justify-content-evenly mx-auto' as='header' fluid>
            <img src={tz_logo} alt='Tanzania Uhuru na Aman' className='my-auto user-select-none'/>
              <section>
              <h4 className='text-capitalize fw-bold'>{country}</h4>
              <h4 className='fw-bold fs-2'>{hospital_name}<br/>(MMHC)</h4>
              </section>
            <img src={hospiLogo} alt="mmhc logo" className='my-auto user-select-none'/>
        </Container>

           <NavHeader/>

        </React.Fragment>

  )
}

export default AppNavigation;
