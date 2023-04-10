import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ServiceList from './ServiceList'


const  ServiceSection= ()=>{



  return (

    <Container fluid className='bg-light py-3' as='main'>
           <h4 className='text-center  fw-bold'>OUR SERVICES</h4>
        <hr/>

        <Row className='gy-4 justify-content-center'>
               <ServiceList/>
        </Row>
     
    </Container>
  )
}

export default ServiceSection