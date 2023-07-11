import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Footercomp = () => {
  return (
    <>
      <div id='About' className='Footerfoot bg-dark mt-5'>
      <Container className='text-light r-1'>
        <Row className='p-3'>
          <Col >
            <h5>About Project</h5>
            <ul>
              <li><b>This Is Demo Project</b>
                <ul>
                  <li>This Means that All The data you Save Stays Only On Your Device.</li>
                  <li>You can Use This information untill you Clear Your Browser Data.</li>
                  <li>if are you Clearing  browsing Data requires re-registration .</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col >
            <h5><i className="text-warning fw-3 bi bi-emoji-smile-fill"></i> I Am Ganesh</h5>
            <ul>
              <li>Frontend Developer</li>
              <li>Any Issue Or Contact Me
                <p><b>upimfyt@gmail.com</b></p>
              </li>
              <li><b>Skill's</b>
                <ul>
                  <li>Html</li>
                  <li>Css & Bootstrap</li>
                  <li>Javascript</li>
                  <li>React Js & Redux</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'><h5> <i className="bi bi-c-circle"></i> All Rights Reserved G-Tech</h5> </Col>
        </Row>
      </Container>
      </div>
     </>
  );
}


export default Footercomp