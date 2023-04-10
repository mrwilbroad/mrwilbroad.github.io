import React, { useEffect, useState } from 'react'
import { Container, Row, Col, ListGroup  } from 'react-bootstrap'

const AboutUsPage =()=> {

const [imgUrs, setImgUrl] = useState(null);


useEffect(()=> {
    
  setImgUrl("https://raw.githubusercontent.com/mrwilbroad/quality-images/main/hospital-one.avif")
},[])

const points = [
  {
    point: "Mtongani Hospital has been serving the community for over 9 years, and is committed to providing high-quality medical services that are affordable and accessible to all"
  },
  {
    point: "The hospital has state-of-the-art facilities and equipment, combined with a team of experienced and dedicated medical professionals, to ensure that patients receive the best possible care"
  },
  {
    point: "Mtongani Hospital offers a wide range of medical services, including general medicine, surgery, pediatrics, obstetrics and gynecology, radiology, laboratory, and pharmacy services"
  },
  {
    point: "The hospital has a team of specialists who provide expert care in various fields, including cardiology, neurology, and oncology"
  },
  {
    point: "Mtongani Hospital is constantly working to improve its services and meet the evolving needs of its patients"
  },
  {
    point: "The hospital is dedicated to promoting health and wellness in the community, and offers health education and outreach programs to help individuals and families lead healthy lives"
  }
]

const ListGr = points.map((po,indx)=> (
  <ListGroup.Item as="li" key={indx}>
  <i className="fa-sharp fa-regular fa-circle-check fa-lg"></i>
  <span className='my-auto mx-1'>{po.point}</span>
  </ListGroup.Item>
))




  return (
    <Container fluid as="main" className='p-0 m-0'>
        
        <Container className='mt-3 mb-5 about-us'>
          <h5>ABOUT US</h5>
          <hr/>

          <Row as="section" className="about-box">
            <Col lg={4} md={5} sm={9} as="section">
              <img  src={imgUrs} alt='Executive Director' className='img-fluid rounded'/>
            </Col>
            
            <Col lg={8} md={8} sm={12} as="section" className=''>
                <p>
                Mtongani Hospital is a leading healthcare provider that has been serving the community for over 9 years. We are committed to providing high-quality medical services that are affordable and accessible to all. Our state-of-the-art facilities and equipment, combined with our team of experienced and dedicated medical professionals, ensure that we deliver the best possible care to our patients.
                </p>

                <p>
                At Mtongani Hospital, we are passionate about healthcare and are constantly working to improve our services to meet the evolving needs of our patients. We offer a wide range of medical services, including general medicine, surgery, pediatrics, obstetrics and gynecology, radiology, laboratory, and pharmacy services. In addition, we have a team of specialists who provide expert care in various fields, including cardiology, neurology, and oncology.
                </p>

                <section>

                  <p className='my-0'>
                  The "About Us" section is where we will provide more information about Mtongani Hospital Center. This section will include a brief history of the hospital, our mission and vision statements, and our core values. We will also highlight some of our key achievements and services offered, as well as any unique features that set us apart from other healthcare providers
                  </p>

                <ListGroup variant="flush" as="ul">
                  {
                    ListGr
                  }
                </ListGroup>

                </section>
            </Col>
        </Row>
        </Container>
    </Container>
  )
}

export default AboutUsPage