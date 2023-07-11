import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'
import Sidecanvas from './Sidecanvas';

function BasicExample() {


   

    return (
        <Navbar expand="lg" className="mb-4 bg-body-tertiary bg-light">
            <Container>

                <Navbar.Brand href="#"><h2 className='text-primary'>
                    <i className="  bi bi-fast-forward-circle-fill"></i> Funto</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=' bg-light' />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className='Navbaranch fw-bold d-flex flex-row gap-3'>
                        <Nav.Link href="/Homepage" className=' text-primary  '>Home</Nav.Link>
                        <Nav.Link href="/Registerpage" className=' text-primary '>Register</Nav.Link>
                        <Nav.Link href="#About" className=' text-primary '>About Me</Nav.Link>
                        
                        <Sidecanvas />
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;

