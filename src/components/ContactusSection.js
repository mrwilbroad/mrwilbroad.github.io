import React, { useEffect } from 'react'
import { Container, Row, Col , Form, Button} from 'react-bootstrap';
import Aos from 'aos';

const ContactusSection =() =>{


    const borderIcon = {
        border: '2px dotted #00495E',
        borderRadius: "50%"
    }

    useEffect(()=> {
        Aos.init({

        })
    })

  return (

    <Container
    data-aos-duration={1000}
    data-aos='zoom-in-up' 
    as='main' fluid className='my-3'>
        <h4 className='text-center mb-3 fw-bold'>OUR CONTACT</h4>


    <Container>
        <Row as="section" className="justify-content-center gx-4 gy-2">
            <Col lg={6} md={8} sm={11} as="section" className="py-2">
                <Row as="section" className="mx-0 justify-content-between text-center gy-2 gx-1">
                    <Col as="section" className='shadow text-center vstack gap-0 py-4' 
                    lg={12} md={12} sm={11}>
                        
                        <small><i style={borderIcon} 
                        className="fa-sharp fa-solid fa-location-dot p-2 fs-2"></i>
                       </small>
                       <h6 className='fw-bold p-0 mt-1'>Our Address</h6>
                       <small className='p-0'>Near Mbezi Bus Terminal,Dar es salam Tanzania</small>

                    </Col>
                    
                    <Col as="section" className='shadow text-center vstack mx-1 gap-0 py-4' lg={5} md={12} sm={11}>
                        
                        <small>
                            <i style={borderIcon}  className="fa-solid fa-envelope p-2 fs-2"></i>
                        </small>
                        <h6 className='mt-1 fw-bold p-0'>Email Us</h6>
                        <small className='p-0 user-select-all'>mmhc@mtonganihospital.com</small>
                        <small className='p-0 user-select-all'>helpdesk@mtonganihospital.com</small>
                    </Col>


            <Col as="section" className='shadow text-center vstack gap-0 py-4' 
            lg={5} md={12} sm={11}>

                <small>
                <i style={borderIcon}  className="fa-solid fa-phone-volume p-2 fs-2"></i>
                </small>
                <h6 className='mt-1 fw-bold p-0'>Call us</h6>
                <small className='p-0'>mobile:+255626195167</small>
                <small className='p-0'>Faq: +255622195167</small>
            </Col>

            

        </Row>
        </Col>

        <Col lg={6} md={8} sm={11} as="section" className="shadow py-2">
        <Form>
            <Row className='justify-content-between gy-2'>

                <Col lg={6} md={12} sm={12}>
                <Form.Control type="text"  size='sm'
                name="fullname" placeholder="Enter Fullname"/>
                </Col>

                <Col lg={6} md={12} sm={12}>
                <Form.Control type="text"  size='sm'
                name="Email" placeholder="Enter Email"/>
                </Col>

                <Col lg={6} md={12} sm={12}>
                <Form.Control type="text"  size='sm'
                name="mobile" placeholder="Enter Mobile number"/>
                </Col>

                <Col lg={6} md={12} sm={12}>
                <Form.Control type="text"  size='sm'
                name="Location" placeholder="Enter Location"/>
                </Col>


                <Col lg={12} md={12} sm={12}>
                <Form.Control type="text"  size='sm'
                name="subject" placeholder="Subject(any title preference)"/>
                </Col>

                <Col lg={12} md={12} sm={12}>
                <textarea className='form-control'></textarea>
                </Col>

                <Col lg={12} md={12} sm={12} className='text-center'>
                <Button type='submit' variant='success' size='sm'>Send message</Button>
                </Col>


            </Row>
        </Form>
        </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default ContactusSection