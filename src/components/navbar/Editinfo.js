


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Formvalidation from '../../Pages/register/Formvalidation';
import { FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MyVerticallyCenteredModal(prop) {
    const history = useNavigate();
    const [FormData, setFormData] = useState();
    const [errors, seterrors] = useState({ Username: 'Don\'t Forgot Username ' });
    const [Refresh, setRefresh] = useState(false);

    const [images, setImages] = useState();
    const comppres = localStorage.getItem('comppress');

    useEffect(() => {
        if (comppres !== undefined || null || '') {
             setImages(JSON.parse(comppres));
        }
    }, [prop,comppres]);

    const Updateimg = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImages(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        setFormData(JSON.parse(localStorage.getItem('UserDetails')));
    }, [errors, Refresh, prop])



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
            localStorage.setItem('UserDetails', JSON.stringify(FormData));
            prop.onHide();
            setRefresh(!Refresh);
            localStorage.setItem('comppress', JSON.stringify(images));

        }
       
        if (errors.formdata === null) {
            prop.onHide();
            localStorage.removeItem('islogin');
            setTimeout(() => {
                history('/Registerpage');
            }, 1000)
        }}, [errors])

    const HandleLogout = () => {
        localStorage.removeItem('islogin');
        localStorage.removeItem('UserDetails');
        localStorage.removeItem('comppress');
        localStorage.removeItem('UploadedFilesname');
        localStorage.removeItem('UploadedFiles');
        prop.onHide();;
        setTimeout(() => {
            history('/Registerpage');
        }, 1000)}

    return (
        <Modal
            {...prop}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Profile
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={HandleRegister} >

                    <InputGroup className="mb-3">
                        <FormLabel className='fw-bold  mt-2 text-primary' htmlFor='profile'>Profile Picture</FormLabel>
                        <Form.Control name='profile' type="file" placeholder="profile" id='profile' onChange={Updateimg} />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control name='Username' autoFocus type="text" value={FormData?.Username ? FormData.Username : ''} placeholder="username" onChange={HandleChange} />
                    </InputGroup>
                    {errors.Username && <p className='mt-1 text-danger'>{errors?.Username ? errors.Username : ''}</p>}

                    <InputGroup className="mb-3">
                        <Form.Control name='dateOfBirth' type="date" value={FormData?.dateOfBirth ? FormData.dateOfBirth : ''} onChange={HandleChange} />
                    </InputGroup>
                    {errors.dateOfBirth && <p className='mt-1 text-danger'>{errors.dateOfBirth}</p>}
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={HandleLogout} className="me-2">
                    <i className="bi bi-person-lines-fill"> Logout</i>
                </Button>
                <Button onClick={HandleRegister}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal
