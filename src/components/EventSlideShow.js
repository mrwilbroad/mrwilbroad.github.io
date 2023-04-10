import React from 'react'
import doctorSLide_three from './../Resources/slide/slide-3.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwipperCore,{ Autoplay,Pagination, Navigation , Scrollbar,EffectCoverflow} from 'swiper';

function EventSlideShow({events}) {


  SwipperCore.use([Navigation, Pagination, Scrollbar,EffectCoverflow, Autoplay]);
   
  return (
    
    <Swiper tag='section' effect='coverflow'
    navigation
    autoplay = {{ 
      delay: 4500,
      disableOnInteraction:false      
     }}
    pagination = {{ clickable: true }}
    scrollbar={{ draggable: true }}
    className='p-0 top-event-slide'
        slidesPerView={1}>
          
            { events.map(event=> (
                 <SwiperSlide tag='section'
                 style={
                  {
                    backgroundImage: `url(${doctorSLide_three})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }
                 } 
                 key={event.id} 
                 className=' position-relative text-center'>
                      <section 
                      className='position-absolute bottom-0 mb-1 end-0 start-0  event rounded bg-light'>

                      <p>{event.description}</p>
                      </section>
                 </SwiperSlide>
            ))}
    </Swiper>
  )
}

export default EventSlideShow