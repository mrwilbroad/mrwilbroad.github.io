import React from 'react'
import { Container, Row, Col, Form , InputGroup, Button} from 'react-bootstrap'

const FooterSection =()=> {


  return (
    <Container as="footer" className='footer-section mb-0 pb-0 mx-0 text-center' fluid>
        <Row className='justify-content-between gy-0 pt-3' as="section">

            <Col lg={9} md={7} sm={6} className='border-end border-4 border-info'>
                <p className='p-0 m-0'>
                    Stay connected with us on our social media pages and subscribe to our newsletter to receive regular updates and exclusive content   
                </p>
            </Col>
            <Col lg={3} md={5} sm={6}>
                {/* <h5>Our NewsLetter</h5> */}
                <Form>
                   <InputGroup size='sm'>
                     <Form.Control type="text" placeholder="Email Address"/>
                     <Button variant="success" type='submit' >
                        subscribe
                     </Button>
                   </InputGroup>
                </Form>
            </Col>

            <Col lg={12} md={12} sm={12}>
                <small className='m-0'>Developed by <a className='text-primary' href='https://github.com/mrwilbroad'>mrwilbroad</a> And content managed by Mtongani Hospital
                </small>
            <p className='p-0 m-0'>Copyright ©2023 Mtongani Hospital. All rights reserved.</p>
            </Col>

        </Row>


    </Container>
  )
}

export default FooterSection