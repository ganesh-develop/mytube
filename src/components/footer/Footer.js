import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footercomp = () => {
  return (
    <>
      <div id='About' className='Footerfoot bg-dark mt-5'>
        <Container >
          <div className='mt-4 text-light r-3'>
          <h5 className='p-2 text-danger text-center'>About Project</h5>
          <ul className='d-flex flex-column gap-2'>
            <li > <b className='text-warning'> This Is Demo Project </b> This Means that All The data you Save Store Only On Your Device.</li>
            <li>You can Use This information untill you Clear Your Browser Data.</li>
            <li>if are you Clearing  browsing Data requires re-registration .</li>
          </ul>
          <hr></hr>
          <Row>
            <Col className='text-center'><h5> <i className="bi bi-c-circle text-success "></i> All Rights Reserved <b className='text-primary'>G-Tech</b></h5> </Col>
          </Row> 
         </div>
        </Container>
      </div>
    </>
  );
}


export default Footercomp