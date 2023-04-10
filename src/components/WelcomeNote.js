import React from 'react'
import { Container } from 'react-bootstrap';
import Hmanager from './../Resources/doctors/prof_hamad.jpg'

const WelcomeNote =()=> {


  return (
    <React.Fragment>
        <Container as="main" className='mt-3 welcome-note'>
                <h6 className='text-center fw-bold text-darkblue'>
                    WELCOME NOTE FROM EXECUTIVE MANAGER
                </h6>
            <section className='mx-auto container border border-2'>

                <img src={Hmanager} alt='MHC manager'
                className='welcome-note-img rounded float-start m-3'/>

                <section>
                <p>Dear valued patients and visitors,</p>
                <p>
                It is my great pleasure to welcome you to Mtongani Hospital, where we strive to provide high-quality healthcare services to our patients. As the Executive Manager of this esteemed institution, I am committed to ensuring that we maintain the highest standards of care, compassion, and professionalism.
                </p>

                <p>
                At Mtongani Hospital, we understand that healthcare is an essential service that is critical to the well-being of our community. As such, we have invested heavily in state-of-the-art facilities and equipment to ensure that we can provide the best possible care to our patients.
                </p>

                <p>
                Our hospital boasts a team of highly trained and experienced healthcare professionals who are dedicated to ensuring that our patients receive the best possible care. We take pride in our multidisciplinary approach to healthcare, which enables us to provide comprehensive care to our patients.
                </p>

                <p>
                As we move forward, we are committed to continuously improving our services to ensure that we meet the evolving needs of our patients. We understand that the healthcare landscape is constantly changing, and we are committed to staying at the forefront of these changes to ensure that our patients receive the best possible care
                </p>

                <p>
                We understand that visiting a hospital can be a stressful experience for patients and their families. That's why we have created a welcoming and supportive environment that puts patients and their needs first. Our goal is to ensure that every patient who walks through our doors feels comfortable, safe, and well-cared for.
                </p>

                <p>
                At Mtongani Hospital, we believe in fostering a culture of excellence, innovation, and continuous learning. Our staff members are regularly trained to stay up-to-date with the latest medical practices and technologies, ensuring that our patients receive the highest quality care. We are committed to making Mtongani Hospital a center of excellence in healthcare in our region and beyond
                </p>

                <p>
                As the executive manager of Mtongani Hospital, I am proud to lead a team of dedicated professionals who are passionate about making a positive impact in the lives of our patients. We are committed to providing exceptional care that meets the highest standards of quality and safety. Thank you for choosing Mtongani Hospital as your healthcare provider. We look forward to serving you and your loved ones.
                </p>

                <p>Sincerely,</p>
                <p>Prof. Hamad Kishikole<br/>Manager, Mtongani Hospital</p>

                </section>
            </section>
        </Container>
    </React.Fragment>
  )
}

export default WelcomeNote