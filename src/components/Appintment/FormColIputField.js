import React from 'react';
import { Col, Form} from 'react-bootstrap';

const FormColIputField = (props) => {


  return (
       
        <Col lg={4} md={9} sm={9} className='mx-auto'>

            {props.label && <Form.Label>{props.label}</Form.Label>}

            <Form.Control 
            type={props.type ? props.type: 'text'} 
            size='sm' className={props.classname? props.classname: ''}
            name={props.name ? props.name: null}
            placeholder={props.placeholder ? props.placeholder:null}/>
            { props.children? props.children: ''}

        </Col>
  )
  
}


export default FormColIputField