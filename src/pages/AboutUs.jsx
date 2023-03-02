import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <h4>Our Vision</h4>
            <p>
              To develop a healthy community by redefining the medical culture
              and reducing health disparities.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <h3>Our Mission</h3>
            <p>
              To increase access to quality care through mobilization of our
              _____community care teams within underrepresented communities and
              diverse populations encompassing our 5 core values.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <h3>Our Values</h3>
            <p>
              <br /> Our 5 core values as an organization are:
              <br /> ● We are passionate in serving the community
              <br /> ● We are successful leaders when we work as a team ● We
              expand health promotion
              <br /> ● We are patient centered
              <br /> ● We deliver quality health education Our values are
              supported by our drive to provide comprehensive mobile medical
              services. With a patient-centered approach, our mission as a
              neighborhood medical team will address the social determinants
              that create obstacles in seeking care.
            </p>
          </Col>
          
          <Col>
          <img
            className="patient-image-2"
            src="https://www.practicebuilders.com/blog/wp-content/themes/pbblog/postimg/2021/july/Do-You-Understand-Your-Patients-Needs-700X246.jpg"
            alt="patient-image1"
          /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
