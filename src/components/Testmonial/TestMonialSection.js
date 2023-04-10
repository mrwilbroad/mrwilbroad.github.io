import React, { useEffect, useState } from 'react'
import { Container,Button } from 'react-bootstrap';
import client_testmonial from "./testmonialData.json";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwipperCore,{ Autoplay,Pagination, Navigation , Scrollbar, A11y,EffectCoverflow} from 'swiper';
import Aos from 'aos';

const TestMonialSection = () => {

  const [messageLangId, setMessagelangID] = useState(null);
  const [istrue, setIsTrue] = useState(false);

    useEffect(()=> {
        Aos.init({
            
        })
    })

    const testmonial = client_testmonial.map((monial,index)=> {
        return (
            <SwiperSlide key={index} 
            className='testmonial-box position-relative bg-paledark mb-5'>
                  
              <section className='bg-paledark p-4 mt-5 text-light position-relative'>
             
                   <small className='m-0'>
                   <i className="fa-solid fa-quote-left text-info fs-5 "></i>
                          {          
                          (messageLangId === monial.id && istrue)? 
                          monial.message_swahil : monial.message_english
                          }
                    <i className="fa-solid fa-quote-right text-info fs-5"></i>
                   </small>
                   <br/>
                
                  
                   { monial.message_swahil &&
                  (  <Button type='button' onClick={()=>  TranslateMessage(monial.id)} 
                  size='sm' >Translate</Button>) }
              </section>

                 <section className='position-absolute start-0 bg-light bg--50    end-0 top-0 d-flex'>
                        <img src={monial.img} alt='Testmonial profile' className='m-1'/>
                        <strong className='my-auto text-dark small'>{monial.from}</strong>
                   </section>

            </SwiperSlide>
        )
    });
  
    const TranslateMessage = (id)=> {
      setMessagelangID(id);
      setIsTrue(!istrue);
    }
    const breakpoints = {

        // above this point
        640: {
            slidesPerView: 3
        }
    }


    SwipperCore.use([Pagination, Autoplay,Navigation,A11y, Scrollbar,EffectCoverflow])

  return (
    <Container 
    data-aos-duration={1000}
    data-aos='zoom-in-up'
    fluid as="main" className='testmonial'>
         <h4 className='text-center text-darkblue fw-bold'>TESTMONIALS</h4>
         <p className='mx-auto text-center'>Read what our patients have to say about their experience at Mtongani Hospital. See how our dedicated team of healthcare professionals provided exceptional care and support</p>
         <hr/>

        <Container className='my-3'>
        <Swiper 
        breakpoints={breakpoints}
        tag='section' 
        effect='coverflow'
        autoplay = {{ 
            delay: 5500,
            disableOnInteraction:false      
        }}
        spaceBetween={10}
        pagination = {{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}>

            {testmonial}
        </Swiper>
        </Container>
    </Container>
  )
}


export default TestMonialSection;
