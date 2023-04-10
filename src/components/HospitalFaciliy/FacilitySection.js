import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos';


const FacilitySection =()=> {

    useEffect(()=> {
        Aos.init({

        })
    },[])


    const Facilities = [
        {
             id: "1",
             name: "EMPLOYEES",
             icon:"fa-sharp fa-solid fa-person",
             count: "1300"
        },
        {
            id: "1",
            name: "BED CAPACITY",
            icon:"fa-sharp fa-solid fa-bed",
            count: "2600"
       },
       {
        id: "1",
        name: "SPECIALIZED CLINICS",
        icon:"fa-solid fa-house-medical-flag",
        count: "230"
   },{
    id: "1",
    name: "RESEARCH LABS",
    icon:"fa-solid fa-flask-vial",
    count: "169"
},
    ]

    const facilitList = Facilities.map((facility, index) => {
        return (
            <Col as="section" className="shadow text-center py-3 px-2" lg={2} key={index}>
              <p className='hstack gap-3 m-0 mx-auto text-center'>
              <i className={`${facility.icon} fs-1 text-primary fa-fade`}></i>
              <strong 
              className='display-5 text-yellow purecounter'>{facility.count}</strong>
              </p>
               <p className='fw-bold text-darkblue'>{facility.name}</p>
            </Col>
        )
    })

  return (
    <Container   className='py-4'
    data-aos-duration={1000}
    data-aos='zoom-in-up' as='main' fluid>
          <h4 className='text-center'>OUR FACILITIES</h4>
          <hr/>
          <Row as="section" className="justify-content-evenly g-2 py-3">
              { facilitList}
          </Row>
    </Container>
  )
}

export default FacilitySection