import { Container, Row, Col } from "react-bootstrap";
import ShowPosts from "./showposts";
import Footer from "../Footer";
import MainPageProfile from "../HomeSideBar";
import RightHompageSidebar from "../RightHompageSidebar";
import AddingPost from "./AddingPost";
import { HiRefresh } from "react-icons/hi";
import { getPostsAction } from "../redux/actions";
import { useDispatch } from "react-redux";
const Mainfeed = () => {
  const dispatch = useDispatch()
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
          <div id="refresh" onClick={() => {
            dispatch(getPostsAction())
          }}><HiRefresh /> Refresh Comments</div>
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
