import { Container, Row, Col } from "react-bootstrap";
import MainPageProfile from "../../HomeSideBar/MainPageProfile";
import RightHompageSidebar from "../../HomeSideBar/RightHompageSidebar";
import Footer from "../Footer";

const Mainfeed = () => {
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={3}>
          <MainPageProfile />
        </Col>
        <Col md={4}>
          <Container
            style={{ minHeight: "800px" }}
            className="placeholder2"
          ></Container>
        </Col>
        <Col md={4}>
          <RightHompageSidebar />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Mainfeed;
