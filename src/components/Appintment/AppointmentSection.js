import React, { useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import FormColIputField from './FormColIputField'
import Department from './../DepartmentList/Department.json';
import Aos from 'aos';



const AppointmentSection  =()=>{

  useEffect(()=> {
    Aos.init({

    })

  })

  const optionList = (key,title, in_name)  => {
    const list =   Department.map((dep,index) => {
      return (
        <option value={dep[key]} key={index}>{dep[key]}</option>
      )
    })

    return (
     <Col lg={4} md={9} sm={9} className='mx-auto'>
         <Form.Select name={in_name} size='sm' defaultValue={0}>
               <option value='0' disabled>{title}</option>
                      {list}
         </Form.Select>
         <Form.Text className="text-muted">
                  You can leave this empty if you don't know what to fill
          </Form.Text>
     </Col>
    )

  }


  
  return (
    <Container data-aos="zoom-in-up"
    data-aos-duration={1000}
    className='mx-auto appointment vstack gap-1 mt-4' as='main' fluid>
        <h4 className='text-center fw-bold text-uppercase'>APPOINTMENT FORM</h4>
        <hr/>
        <p className='text-justify mx-auto my-0'>
        Streamline your healthcare experience with our appointment system. Avoid the rigmarole of long waiting times and effortlessly schedule your visit to our facility.
        </p>

        <p className='text-center apt-text m-0'>
        Seeking timely medical attention is paramount to ensure optimal health outcomes. Don't wait until symptoms worsen, as prompt medical intervention can avert potentially serious complications. Our appointment system offers a convenient and streamlined approach to accessing quality healthcare services. Whether it's routine check-ups or specialized treatments, our team of highly skilled healthcare professionals is committed to delivering compassionate and evidence-based care to help you maintain optimal health.
        </p>


        <Form className='my-4 px-1 container'>
          <Row className='justify-content-between g-3' as='section'>
              <FormColIputField 
              name="fullname" 
              placeholder= "Enter Fullname">
                 <Form.Text className="text-muted">
                  This section is required
                </Form.Text>
              </FormColIputField>

             <FormColIputField 
              name="email" type='email' 
              placeholder= "Enter email-address">
                <Form.Text className="text-muted">
                  Provide correct Email Address
                </Form.Text>
              </FormColIputField>
              
              <FormColIputField 
              name="phone" 
              placeholder= "Enter phone number">
                <Form.Text className="text-muted">
                  Provide correct Mobile number e.g 255626195167
                </Form.Text>
              </FormColIputField>

             <FormColIputField
             placeholder ='Date of Appointment'
             name="date_of_appointment">
              <Form.Text className="text-muted">
                  This section is required
                </Form.Text>
             </FormColIputField>
             
             {optionList('name',"Choose Department",'department')}

             { optionList('doctor',"Choose Doctors",'doctor')}


          </Row>
          <section className='mx-auto vstack gap-2 col-lg-3 mt-4'>
                <Button type='submit' variant="success" size='sm'>
                  Make Appointment
                </Button>
          </section>

        </Form>


    </Container>
  )
}

export default AppointmentSection