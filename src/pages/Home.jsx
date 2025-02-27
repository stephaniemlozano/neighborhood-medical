import { Container, Row, Col } from "react-bootstrap";
import marchevent1 from "../assets/images/marchevent.jpg";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="hwelcome">Welcome!</h2>
        </Row>
        <Row>
          <img className="marchevent" src={marchevent1} alt="march event" />
        </Row>
        <Row className="patient-needs">
          <Col xs={11}>
            <img
              className="patient-image-1"
              src="https://www.practicebuilders.com/blog/wp-content/themes/pbblog/postimg/2021/july/Do-You-Understand-Your-Patients-Needs-700X246.jpg"
              alt="patient-image1"
            />
          </Col>
          <Col xs={6}>
            <ul>
              <h4>
                What Do We Offer for Our Patients?
              </h4>
                <ul>
                  <li>
                    Adult Social Care, Mental Health & Community Services: works
                    collaboratively with adults and their families in South
                    Florida alongside hospital colleagues and key Government
                    departments.
                  </li>
                  <li>
                    Primary and Preventative Care (PPC): is responsible for the
                    undertaking of governance functions, performance management
                    and oversight of the primary care service.
                  </li>
                  <li>
                    Mental Health Services: Provide services through the clinic
                    and referring partners to identify and treat mental health,
                    neurological and substance abuse disorders.
                  </li>
                </ul>


              <br /> Our own experience, based on years of caring for patients,
              is that people seeking medical care have the following needs:
              <br />● To be treated with respect and dignity <br />
              <br />● To be actively engaged in a community of some kind <br />
              <br />● To be involved in his/her own treatment and living plan{" "}
              <br />
              <br />● To be cared for by skilled, medically-knowledgeable
              significant need for quality home health care and social services
              within this region and we believe that by employing competent and
              well-educated staff and providing them with organized and
              responsive management, we can become the best community health
              care/social service organization of choice in Southern Florida.
            </ul>
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
