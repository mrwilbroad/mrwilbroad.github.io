import React, { useEffect, useState } from 'react'
import { Container, Button,Image, Row, Col , Tab, Nav} from 'react-bootstrap'
import Departments from './Department.json';
import Aos from 'aos';
import { NavLink } from 'react-router-dom';



function DepartmentSection(props) {


    const [selectedLink , setActiveLink] = useState(0);
    const [depetLimit, setDepetmentLimit] = useState(5);

    const imgSize = {
        width: '310px',
        height: '310px'
    }

    useEffect(()=> {
        Aos.init({

        })

        if(props.depertmentLimit)
        { setDepetmentLimit(Departments.length)}
       
    },[props.depertmentLimit])


  


   const HandleActiveNavLink = (index)=> {
      setActiveLink(index);
    }

    const departmntNavItem = Departments.map((dept, index)=> (
        
       index < depetLimit &&
        <Nav.Item key={index} as="ul"
        // data-aos='fade-right'
        onClick={()=> HandleActiveNavLink(index)}
        className={`dept-item bg-light ${selectedLink === index ? 'nav-border-click': null} p-0`}>
            <Nav.Link eventKey={`${index}`} className='m-0 p-1'>
                <h6 className='m-0 w-bold '>{dept.name}</h6>
                <small className='m-0 p-0'>{dept.location}</small>
            </Nav.Link>
        </Nav.Item>
    ))

    const DepartmentTabPane = Departments.map((dept, index)=> (
        index < depetLimit &&
        <Tab.Pane  key={index} 
        eventKey={`${index}`}
        className='dept-info-box'>
            <h6 className='text-center text-darkblue'>{dept.name}</h6>
            <section>
            <Image src={dept.image} alt={`${dept.name}'s department`} className='float-start mx-1 rounded' 
            style={imgSize} />

            <p className=''>{dept.description}</p>
            <p className='m-0'>
                <strong>Service:</strong>
                {dept.disease}</p>
            <p>
            <strong>Look For help?<br/></strong>
            <small className='user-select-all'>
                Email :{dept.email}, Mobile : {dept.mobile}</small>
            </p>
            
            { !props.depertmentLimit && <Button variant="primary" size='sm' className='float-end '>
            <NavLink to='/department-list' className='text-light'>
                see other department</NavLink>
            </Button>}
        
            <div className='clearfix'></div>
            </section>
           
        </Tab.Pane>
    ))

  return (
    <Container
    data-aos-duration={1000}
    data-aos="zoom-in-up"
    className='mx-auto vstack gap-1' as='main'>
         <h4 className='text-center fw-bold text-uppercase'>OUR DEPARTMENTS</h4>
        <hr/>
         <Tab.Container defaultActiveKey="0">
            <Row className='gx-0 department'>

                <Col sm={4} className='department-list'>
                    <Nav as='nav'  className="flex-column">
                        {departmntNavItem}
                    </Nav>
                </Col>

                <Col sm={8}>
                    <Tab.Content data-aos='fade-left'>
                        {DepartmentTabPane}
                    </Tab.Content>
                </Col>
            </Row>
         </Tab.Container>


    
    </Container>
  )
}

export default DepartmentSection