import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import Sidecanvas from './Sidecanvas';
import { Link } from 'react-router-dom';

function BasicExample() {




    return (
        <Navbar expand="lg" className="mb-4 bg-body-tertiary bg-light">
            <Container>

                <Navbar.Brand href="#"><h2 className='text-primary'>
                    <i className="  bi bi-fast-forward-circle-fill"></i> Funto</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=' bg-light' />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='Navbaranch fw-bold d-flex flex-row gap-3'>
                        <Link to={"/Homepage"} className=' text-primary mt-3 '>Home</Link>
                        <Link to={"/Registerpage"} className=' text-primary mt-3'>Register</Link>
                        <Nav.Link href="#About" className=' text-primary mt-3 p-0 '>About Pj</Nav.Link>
                        <Sidecanvas />
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

