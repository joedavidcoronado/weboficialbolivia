import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // O 'react-scroll' si es de una sola página
import './Header.css'; // Para estilos personalizados de la landing

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-3">
        <Container>
            {/* Logo y Título */}
            <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <Image 
                src="/logo.png" 
                alt="Logo Bolivia" 
                height="40" 
                className="me-2" 
            />
            <span className="fw-bold text-dark">BOLIVIA WEB</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="landing-navbar" />

            <Navbar.Collapse id="landing-navbar">
            {/* Enlaces principales de la Landing */}
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" className="px-3">Inicio</Nav.Link>
                <Nav.Link as={NavLink} to="/turismo" className="px-3">Turismo</Nav.Link>
                <Nav.Link as={NavLink} to="/cultura" className="px-3">Cultura</Nav.Link>
                <Nav.Link as={NavLink} to="/contacto" className="px-3">Contacto</Nav.Link>
            </Nav>

            {/* Botón de acción resaltado (Call to Action) */}
            <Nav className="ms-lg-3">
                <NavLink 
                to="/login" 
                className="btn btn-warning fw-bold px-4 rounded-pill"
                >
                Explorar Ahora
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Header;