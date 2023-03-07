import { Container, Nav, Navbar } from "react-bootstrap";
import logo1 from "../assets/images/logoTransparentBg.png";
const Header = () => {
  return (
    <Navbar bg="light" variant={"light"} expand="lg">
      {/* <img className="logo-image-1" src="https://rafael-reyes-bucket.s3.amazonaws.com/logoTransparentBg.png" alt="logo-image1"/>      */}
      <img className="logo-image-1" src={logo1} alt="logo-image1" />
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="tabs">
            <h6 className="htab">
              <Nav.Link href="/">Home</Nav.Link>
            </h6>
            <h6 className="htab">
              <Nav.Link href="/aboutus">About Us</Nav.Link>
            </h6>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
