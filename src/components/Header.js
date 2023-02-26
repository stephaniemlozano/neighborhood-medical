import { Container, Nav, Navbar, Image } from 'react-bootstrap';

const Header = () => {
    return (

        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" variant="tabs">
              <h6><Nav.Link href="/">Home</Nav.Link></h6>              
              <h6><Nav.Link href="/aboutus">About Us</Nav.Link></h6>   
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 

    )
}

export default Header