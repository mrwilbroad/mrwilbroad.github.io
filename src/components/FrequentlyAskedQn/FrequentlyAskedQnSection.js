import React, { useEffect, useState } from 'react'
import { Container , ListGroup } from 'react-bootstrap';
import Aos from 'aos';
import AskedQns from './AskedQn.json';

const FrequentlyAskedQnSection =()=>{

    const [isOpen, setOpen] = useState(1);

    const SetFaqOpen = (faqid)=> {
        setOpen(faqid);
    }

    useEffect(()=> {
        Aos.init({

        })
    })

    const trans = {
        transition: "28s"
    }
 
    const AskedQnList = AskedQns.map((faq)=> {
        return (
            <ListGroup.Item as='li' key={faq.id} className='faq-box'>
                    <h6 role='button' onClick={()=> SetFaqOpen(faq.id)} className='my-0 text-darkblue'>
                    <i className="fa-solid fa-angles-right fa-sm"></i>
                       {faq.question}
                    </h6>
                    
                       { isOpen === faq.id && (
                        <section   className='ms-3' style={trans}>
                               <p data-aos="zoom-in" data-aos-delay={620}>{faq.answer}</p>
                        </section>
                       ) }
                  
                </ListGroup.Item>
        )
    })
    

  return (
    <Container
    className='faq-zone'
    data-aos-duration={1000}
    data-aos='zoom-in-up' 
    as='main' fluid>
        <h4 className='text-center text-darkblue fw-bold'>FREQUENTLY ASKED QUESTION</h4>
        <p className='mx-auto text-center'>
        Get answers to commonly asked questions about Mtongani Hospital, our services, and policies. Find out everything you need to know before your visit.
        </p>
        <hr/>

        <section className='mb-5 mx-0'>
            <ListGroup as='ul' variant='flush'>{AskedQnList}</ListGroup>
        </section>
        
    </Container>
  )
}

export default FrequentlyAskedQnSection