import { Container, Row, Col } from "react-bootstrap";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { retrieveDataAction } from "./components/redux/actions";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
function App() {

  return (
    <Container className="main-con">
      <Row className="main-con-row">
        <Col md={6}>
          <Container className="placeholder"></Container>
        </Col>
        <Col md={2}>
          <Container className="placeholder">
            <Sidebar />
          </Container>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
