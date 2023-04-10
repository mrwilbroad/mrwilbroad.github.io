import React from 'react'
import { Col } from 'react-bootstrap';


const ServiceList = () => {


   

    const serviceData = [
        {
            name: "Laboratory services",
            descr: "The hospital laboratory provides a range of diagnostic testing services, including blood tests, urine tests, and microbiology tests. These tests help doctors diagnose and manage a wide range of medical conditions",
            serviceOffer: "Patients may need to provide a blood, urine, or other sample, which will be analyzed in the laboratory. Results are usually available within a few hours to a few days, depending on the type of test",
        },
        {
            name: "Imaging services",
            descr: "Imaging services include X-rays, ultrasound, CT scans, and MRI scans. These imaging tests help doctors visualize internal structures and organs to aid in diagnosis and treatment",
            serviceOffer:"Imaging tests are typically non-invasive and painless. Patients may need to remove clothing or jewelry for the test, and may need to hold still in a specific position. The imaging test will produce images that will be reviewed by a radiologist or other specialist"
        },
        {
            name: "Pharmacy services",
            descr: "Hospital pharmacies provide medications prescribed by doctors and other healthcare providers. They also provide advice and education to patients on how to take their medications safely and effectively",
            serviceOffer: "Patients can fill their prescriptions at the hospital pharmacy, and may also be able to receive vaccinations and other immunizations. The pharmacy team may also provide medication counseling and education to patients"
        },
        {
            name: "Eye Surgery",
            descr: "This service is offered to patients who need surgery on their eyes due to cataracts, glaucoma, or other eye conditions. The surgery is performed by an ophthalmologist using advanced surgical equipment"
        },
        {
            name: "Physical Therapy",
            descr: "This service is offered to patients who have suffered injuries or have chronic conditions that require physical rehabilitation. A physical therapist will work with the patient to improve their mobility, strength, and overall physical function"
        },
        {
            name: "Mental Health Services",
            descr: "This service is offered to patients who have mental health conditions, such as depression, anxiety, or bipolar disorder. The hospital will have trained psychiatrists and mental health professionals who will provide counseling and therapy to patients"
        },
        {
            name: "Maternity Services",
            descr: "This service is offered to expectant mothers who need prenatal care and assistance during childbirth. The hospital will have obstetricians and gynecologists on staff who will provide the necessary medical care to ensure a healthy pregnancy and delivery"
        },
        {
            name: "Emergency Services",
            descr: "This service is offered to patients who require immediate medical attention due to an injury, illness, or other medical emergency. The hospital will have a dedicated emergency department with highly trained medical staff and advanced equipment to provide life-saving treatment"
        }

    ]

    const mainService = serviceData.map((service, index) => {
        return (
            <Col lg={5} 
            md={5} sm={12} 
            key={index} as='section'
            className='service-box text-center shadow m-2 rounded  py-4'>
                <section>
                    <h5 className='text-center fw-bold'>{service.name}</h5>
                    <small className='text-center'>{service.descr}</small>
                </section>
            </Col>
        )
    })

  return (mainService)
}


export default ServiceList;