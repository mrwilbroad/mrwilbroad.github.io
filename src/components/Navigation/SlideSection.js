import React from 'react';
import {Container,Row , Col,Image } from 'react-bootstrap/';
import slidesEvent from './EventData.json';
import EventSlideShow from '../EventSlideShow';
import { NavLink } from 'react-router-dom';
import HosManerImg from './../../Resources/doctors/prof_hamad.jpg';


const SlideSection =()=> {


const prof_name = "Prof. Hamad Kishikole";
const message_hs_manager = "It is with great pleasure that I welcome you to Mtongani Hospital, where we strive to provide the highest quality healthcare services to our patients. As the manager of this esteemed institution, I am committed to ensuring that every person who walks through our doors receives the best care possible.At Mtongani Hospital, we believe that our patients are more than just their medical conditions.";


  return (
    <Container fluid as='section' className='p-0'>
         <Row className='gy-3 gx-0 p-0  justify-content-center' as='section'>
        <Col lg={8} md={12} sm={12} as='section'>

          <EventSlideShow events = {slidesEvent}/>
        </Col>

        <Col lg={4} md={12} sm={12} as='section'>
          <h4 className='text-uppercase text-center py-1 fw-bold bg-darkblue text-light'>Welcome Note 2024</h4>

          <section className='clearfix'>

          <section className='float-lg-start float-md-start text-center justify-content-center text-center d-flex flex-column'>

           <Image src={HosManerImg} alt='Manager profile' className="welcome-note-img mx-auto rounded"/>

           <small className='bg-darkblue rounded p-1 mt-2 text-light'>
            {prof_name}
            </small>
          </section>

          <section className='text-justify p-3'>
          <p>
          <i className="fa-solid fa-quote-left text-darkblue p-2"></i>
              {message_hs_manager}
              <i className="fa-solid fa-quote-right text-darkblue p-2"></i>
          </p>

            <NavLink 
            to='/welcome-note' 
            className='text-dark'>
            Read more<i className="bi bi-chevron-double-right"></i>
            </NavLink>
          </section>
          </section>
    
        </Col>
    </Row>
    </Container>

  )
}

export default SlideSection