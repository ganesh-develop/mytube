

import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidecancss.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import MyVerticallyCenteredModal from './Editinfo';



function OffCanvasExample() {

    const [userDetails, setuserDetails] = useState();
    const [upcomppres, setupdatecomppres] = useState();

    const Localval = localStorage.getItem('UserDetails');
    const comppres = localStorage.getItem('comppress');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        if (Localval !== undefined || null || '') {
            const tempval = JSON.parse(Localval);
            setuserDetails(tempval);
            setupdatecomppres(JSON.parse(comppres));
        }
    }, [modalShow, Localval, show,comppres]);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                <i className="bi bi-person-lines-fill"> Profile</i>
            </Button>
            <Offcanvas placement={'end'} show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton className='OffcanvasHeader'>
                    <Offcanvas.Title className='fw-bold  display-5'>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='sidebaaror'>
                    <Container>
                        <div className='box d-flex flex-row justify-content-between gap-1'>
                            <Button className=' Editicons' onClick={() => setModalShow(true)}>
                                <div className='imagebox-1'>
                                    <Image src={(upcomppres ? upcomppres : '')} typeof="image/jpg" className='img-fluid cover-image' alt=''></Image>
                                </div>

                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <div className='Userdetails  fw-bold '>
                                <h6>User : {userDetails?.userid ? userDetails.userid : 'No Valid User'}</h6>
                                <ul className='text-info'>
                                    <li> Name : {userDetails?.Username ? userDetails.Username : 'No Name'} </li>
                                    <li> DoB : {userDetails?.dateOfBirth ? userDetails.dateOfBirth : "00:00:0000"}</li>
                                    <li> E-mail : {userDetails?.E_mail ? userDetails.E_mail : "Example@gmail.com"}</li>
                                </ul>
                            </div>
                        </div>

                        <hr></hr>
                        <div>
                            <h5 className='fw-bold text-danger '>Personal</h5>
                            <ul className='personal'>
                                <li className='side '><Link to='#' className='link'>Friends</Link></li>
                                <li className='side '><Link to='#' className='link'>Chats</Link></li>
                                <li className='side '><Link to='#' className='link'>Groups</Link></li>
                                <li className='side '><Link to='#' className='link'>Status</Link></li>
                            </ul>
                        </div>


                        <hr></hr>

                        <div>
                            <h5 className='fw-bold text-danger Public'>Public</h5>
                            <ul className='public'>
                                <li className='side '><Link to='#' className='link'>Funto Settings</Link></li>
                                <li className='side '><Link to='#' className='link'>Updates</Link></li>
                                <li className='side '><Link to='#' className='link'>Privacy</Link></li>
                                <li className='side '><Link to='#' className='link'>Terms & Conditions</Link></li>
                            </ul>
                        </div>

                    </Container>
                </Offcanvas.Body>
            </Offcanvas >
            <MyVerticallyCenteredModal prop={modalShow.toString()}
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </>
    );
}




export default OffCanvasExample;

