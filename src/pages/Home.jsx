import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div>
        <h2 className="hwelcome">Welcome!</h2>
      </div>

      <Container>
        <Row>

      
          <img
            className="patient-image-1"
            src="https://www.practicebuilders.com/blog/wp-content/themes/pbblog/postimg/2021/july/Do-You-Understand-Your-Patients-Needs-700X246.jpg"
            alt="patient-image1"
          />
       

          <Col xs={6}>
            <h4>Patient's Needs:</h4>
            <br /> Our own experience, based on years of caring for patients, is
            that people seeking medical care have the following needs:
            <br />● To be treated with respect and dignity <br />
            <br />● To be actively engaged in a community of some kind <br />
            <br />● To be involved in his/her own treatment and living plan{" "}
            <br />
            <br />● To be cared for by skilled, medically-knowledgeable
            clinicians and caregivers, working as a teamThus, there is a
            significant need for quality home health care and social services
            within this region and we believe that by employing competent and
            well-educated staff and providing them with organized and responsive
            management, we can become the best community health care/social
            service organization of choice in Southern Florida.
          </Col>
          <Col xs={6}></Col>
          <br />

        </Row>

        <Row>
          <Col></Col>
          <Col xs={3}></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
