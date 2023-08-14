

import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FormLabel } from 'react-bootstrap';
import Formvalidation from './Formvalidation';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Regcss.css';

const Register = () => {
    const history = useNavigate();
    const PassToggle = useRef();
    const [Passvisible, setPassvisible] = useState(false)
    const [errors, seterrors] = useState({ Username: '' });
    const [FormData, setFormData] = useState({
        Username: '',
        E_mail: '',
        Password: '',
        gender: '',
        dateOfBirth: ''
    });


    const PassTextHandle = (e) => {
        if (Passvisible === false) PassToggle.current.type = 'text';
        else PassToggle.current.type = 'password';
        setPassvisible(!Passvisible);
    }

    const HandleChange = (e) => {
        e.preventDefault();
        setFormData({ ...FormData, [e.target.name]: e.target.value });

    }

    const HandleRegister = (e) => {
        e.preventDefault();
        seterrors(Formvalidation(FormData));
    }

    useEffect(() => {
        if (Object.values(errors).length === 0) {

            const newuservalues = { ...FormData, userid: Math.floor(Math.random() * 1000 + 100) };
            localStorage.setItem('UserDetails', JSON.stringify(newuservalues));

            setTimeout(() => {
                history('/Homepage');
            }, 1000)
            alert("Wow Registration Successfully Completed");

        }
    }, [errors, FormData])

    return (
        <div className='Regform'>
            <form onSubmit={HandleRegister} >
                <h2 className='reg-title fw-bold text-center mb-5 text-primary '>Registration Form</h2>
                <div className="p-2 Inputs-group">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-username "><i className="bi bi-person-check-fill text-primary"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingInput" label="User Name" className="fw-bold ">
                            <Form.Control name='Username' autoFocus type="text" value={FormData.Username} placeholder="username" onChange={HandleChange} />
                        </FloatingLabel>
                    </InputGroup> {errors.Username && <p className='mt-1 text-danger'>{errors.Username}</p>}

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-email "><i className="text-primary bi bi-envelope-at-fill"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingemail" label="E-Mail" className="fw-bold">
                            <Form.Control name='E_mail' type="email" value={FormData.E_mail} placeholder="E-Mail"
                                onChange={HandleChange} />
                        </FloatingLabel>
                    </InputGroup> {errors.E_mail && <p className='mt-1 text-danger'>{errors.E_mail}</p>}


                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-date"><i className="bi bi-pass-fill text-primary"></i></InputGroup.Text>
                        <Form.Control name='dateOfBirth' type="date" value={FormData.dateOfBirth} placeholder="name@example.com"
                            onChange={HandleChange} />
                    </InputGroup> {errors.dateOfBirth && <p className='mt-1 text-danger'>{errors.dateOfBirth}</p>}

                    <InputGroup className="mb-3 mt-2 bg-light rounded-1">
                        <InputGroup.Text id="basic-gender "><i className="bi bi-pass-fill text-primary"></i></InputGroup.Text>
                        <FormLabel label="Gender" className="ms-3 fw-bold mt-3  " > Gender</FormLabel>
                        <label className='mt-3 ms-3 d-flex justify-content-start gap-1 fw-bold text-primary'> Male
                            <input className="mb-1 " type="radio" name='gender' value="Male" checked={FormData.gender === 'Male'} onChange={e => setFormData({ ...FormData, gender: e.target.value })} />
                        </label>
                        <label className='mt-3 ms-3 d-flex justify-content-start gap-1 fw-bold text-primary'> Female
                            <input className="mb-1 " type="radio" name='gender' value="Female" checked={FormData.gender === 'Female'} onChange={e => setFormData({ ...FormData, gender: e.target.value })} />
                        </label>
                    </InputGroup> {errors.gender && <p className='mt-1 text-danger'>{errors.gender}</p>}


                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-password "><i className="bi bi-pass-fill text-primary"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingpassword" label="Password" className="fw-bold" >
                            <Form.Control ref={PassToggle} name='Password' type="Password" value={FormData.Password} placeholder="Abc123456"
                                onChange={HandleChange} />
                        </FloatingLabel>
                    </InputGroup> {errors.Password && <p className='mt-1 text-danger'>{errors.Password}</p>}

                    <Form.Check // prettier-ignore 
                        onChange={PassTextHandle} type="switch" label="Password" id="custom-switch" className=' ms-3 d-flex justify-content-start gap-1 fw-bold text-light' />


                    <div className=" d-flex justify-content-end fw-bold me-3">
                        <Link className='mt-3 me-3  text-light ' to='/' >Login Now</Link>
                        <button type="submit" className="btn btn-primary fw-bold mb-3" onClick={HandleRegister}>Register</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Register
