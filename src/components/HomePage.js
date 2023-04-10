import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import VisionSection from './VisionSection'
import ServiceSection from './HospitalService/ServiceSection'
import AppointmentSection from './Appintment/AppointmentSection'
import DepartmentSection from './DepartmentList/DepartmentSection'
import TestMonialSection from './Testmonial/TestMonialSection'
import FrequentlyAskedQnSection from './FrequentlyAskedQn/FrequentlyAskedQnSection';
import SlideSection from './Navigation/SlideSection'
import FacilitySection from './HospitalFaciliy/FacilitySection'
import ContactusSection from './ContactusSection'

class HomePage extends Component {

constructor(props) {
  super(props)

  this.state = {
     
  }

}

  render() {

    return (
      <React.Fragment>
        <SlideSection/>
   
      <Container fluid as='main' className='vstack gap-5 mt-5 p-0 mx-auto vw-100 app-home'>
            <hr/>
            <VisionSection/>

            <ServiceSection/>

            <DepartmentSection/>

            <FacilitySection/>

            <AppointmentSection/>

            <TestMonialSection/>

            <FrequentlyAskedQnSection/> 

            <ContactusSection/>
      </Container>
    </React.Fragment>
    )
  }
}

export default HomePage