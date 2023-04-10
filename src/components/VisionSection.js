import React, { useEffect} from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Aos from 'aos';

function VisionSection() { 

    useEffect(()=> {
        Aos.init({

        })
    })

    const visions = [
        {
            title: 'Patient-Centered Care',
            description: "Our hospital's primary focus is to provide high-quality care to our patients. We aim to create a welcoming and supportive environment where patients feel cared for and supported",
            icon: 'bi bi-heart-fill'
        },
        {
            title: 'Innovating Health Care',
            description: 'We strive to be at the forefront of innovative health care by using the latest technology and techniques to diagnose and treat medical conditions',
            icon: 'bi bi-gear-fill'
        },
        {
            title: 'Sustainability and Responsibility',
            description: ' We are committed to promoting sustainable practices and acting as responsible stewards of the environment',
            icon: 'bi bi-recycle'
        }
    
    ]


    const hstMission = "At Mtongani Hospital Center, we are steadfastly committed to advancing the frontiers of healthcare provision and delivering unparalleled medical services to our esteemed clientele. Our mission is to embody the highest standards of clinical excellence, operational efficiency, and ethical responsibility in every aspect of our practice. Through unwavering dedication to patient-centered care, we strive to alleviate human suffering, promote well-being, and extend hope to those entrusted to our care. Driven by a fervent pursuit of innovation and excellence, we seek to transform the healthcare landscape and empower individuals and communities to achieve optimal health outcomes. Our pledge to serve with compassion, integrity, and respect underpins our unwavering commitment to making a positive impact on the lives of our patients and their families";


    

    const ColVisionList = visions.map((vision,index)=> {
        return (
            <Col key={index} 
            data-aos='zoom-in-up'
            data-aos-delay={(index*100) + 100}
            lg={3} md={6} sm={5}
            className={`shadow vision-box bg-light text-dark rounded d-flex flex-column`}>
                  <i className={`${vision.icon}`}></i>

                 <section className='text-center m-0'>
                 <h6 className='fw-bold m-0 pb-1 pt-0'>{vision.title}</h6>
                 <small className='m-0 p-0'>{vision.description}</small>
                 </section>
            </Col>
        )
    })

  return (
    <Container 
    className='bg-darkblue py-3 vstack gap-5'
    data-aos-duration={1000}
    data-aos='zoom-in-up' as='main' fluid>
        <section>
        <h4 className='text-center text-light fw-bold display-5'>OUR VISION</h4>
        <hr/>

        <Row className='gy-3 justify-content-evenly vision'>
            {ColVisionList}
        </Row>
        </section>

        <section className='mx-auto text-center' 
        data-aos-easing='ease-in-sine' data-aos="fade-up-right">
        <h4 className='text-center text-light fw-bold display-5'>OUR MISSION</h4>
        <hr/>
              <p className='text-light'>
                {hstMission}
              </p>
        </section>


    </Container>
  )
}

export default VisionSection