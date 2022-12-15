import { Container, Row, Col } from "react-bootstrap";
import ShowPosts from "./showposts";
import Footer from "../Footer";
import MainPageProfile from "../HomeSideBar";
import RightHompageSidebar from "../RightHompageSidebar";
const Mainfeed = () => {
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={2} className="align-content-center">
            <MainPageProfile />
        </Col>
        <Col md={4}>
          <ShowPosts />
        </Col>
        <Col md={2}>
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
