

import React, { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Loginpage = () => {
    const history = useNavigate();
    const [Passvisible, setPassvisible] = useState(false);
    const PassToggle = useRef();
    const islogin = localStorage.getItem('islogin');
    const [loginerrors, setloginerrors] = useState({});
    const [UserNameGt, setUserNameGt] = useState('');
    const [UserPassword, setUserPassword] = useState('');
    const localdatas = localStorage.getItem('UserDetails');
    const [UserCollcData, setUserCollcData] = useState({Username:false,Password:false});

    useEffect(() => {

        if (localdatas !== undefined && localdatas !== null) {
            const tempdata = JSON.parse(localdatas);
            setUserCollcData(tempdata);
        }


    }, [localdatas])


    const PassTextHandle = (e) => {
        if (Passvisible === false) PassToggle.current.type = 'text';
        else PassToggle.current.type = 'password';
        setPassvisible(!Passvisible);
    }

    const HandleLogin = () => {
        if (UserCollcData.Username === UserNameGt && UserCollcData.Password === UserPassword) {
            localStorage.setItem('islogin', JSON.stringify(true));
            alert("Successfully Loged In");

            setTimeout(() => {
                history('/Homepage');
            }, 1000)

            return;
        }
        else if (UserCollcData.Password === UserPassword && UserCollcData.Username !== UserNameGt) {
            setloginerrors({ ...loginerrors, Username: 'UserName Not Match' });
        }
        else if (UserCollcData.Username === UserNameGt && UserCollcData.Password !== UserPassword) {
            setloginerrors({ ...loginerrors, Password: 'Password Not Match' });
        }
        else {
            setloginerrors({ ...loginerrors, Username: 'UserName Not Match', Password: 'Password Not Match' });
        }
    }

    const [Loginifo, setLoginifo] = useState('');
    useEffect(() => {

        if (islogin === 'true') {
            setLoginifo('Welcome Again...');
            setTimeout(() => {

                history('/Homepage');
            }, 3000)
        }

    }, [islogin]);

    return (

        <>
            <Form onSubmit={HandleLogin} >
                <div className=' p-2'>
                    <h2 className='fw-bold text-center mb-5 text-success'>Login Form</h2>
                    {Loginifo && <h2 className='fw-bold text-center mt-3 mb-3 text-success'>{Loginifo}</h2>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1 "><i className="bi bi-person-check-fill text-primary"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingInput" label="User Name" className="fw-bold" >
                            <Form.Control autoFocus type="text" placeholder="name@example.com" value={UserNameGt}
                                onChange={(e) => setUserNameGt(e.target.value)} />
                        </FloatingLabel>
                    </InputGroup>
                    {loginerrors?.Username && <p className='fw-bold text-warning'>{loginerrors?.Username}</p>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic "><i className="bi bi-pass-fill text-primary"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingpassword" label="Password" className="fw-bold" >
                            <Form.Control ref={PassToggle} type="Password" value={UserPassword}
                                onChange={(e) => setUserPassword(e.target.value)} />
                        </FloatingLabel>
                    </InputGroup>
                    {loginerrors?.Password && <p className='fw-bold text-warning'>{loginerrors?.Password}</p>}

                    <p className='fw-bold text-primary text-end'>Forgot Password</p>
                    <Form.Check // prettier-ignore 
                        onChange={PassTextHandle} type="switch" label="Password" id="custom-switch" className=' ms-3 d-flex justify-content-start gap-1 fw-bold text-success' />

                    <div className=" d-flex justify-content-end fw-bold gap-2 align-items-end">
                        <Link to='/Registerpage' >Register Now</Link>
                        <button type="button" className="btn btn-primary fw-bold " onClick={HandleLogin}> Login</button>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default Loginpage
