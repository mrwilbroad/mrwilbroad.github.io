import React from 'react'
import DepartmentSection from './DepartmentList/DepartmentSection'
import { Container } from 'react-bootstrap'


const DepertmentPage =() =>{


  return (
    <React.Fragment>
         <Container as="main" fluid className='mt-5'>
         <DepartmentSection depertmentLimit={true}/>
         </Container>
    </React.Fragment>
  )
}

export default DepertmentPage