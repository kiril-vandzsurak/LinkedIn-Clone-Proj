import { Container, Row, Col } from "react-bootstrap";
import ShowPosts from "./showposts";
import Footer from "../Footer";
import MainPageProfile from "../HomeSideBar";
import RightHompageSidebar from "../RightHompageSidebar";
import AddingPost from "./AddingPost";
const Mainfeed = () => {
  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={2}>
          <Container className="">
            <MainPageProfile />
          </Container>
        </Col>
        <Col md={4} className="mx-5">
          <AddingPost />
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
