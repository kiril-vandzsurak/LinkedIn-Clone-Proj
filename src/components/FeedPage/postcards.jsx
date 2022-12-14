import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Postcard = (props) => {
  if (props.data.user !== null) {
    return (
      <>
        <Container className="post-card">
          <Row>
            <div className="d-flex">
              <div className="comment-img-con">
                <img
                  src={props.data.user.image ? props.data.user.image : ""}
                  alt="user"
                />
              </div>
              <Col>
                <div className="comment-header">
                  <span
                    style={{ fontSize: "0.8rem" }}
                    className="font-weight-bold"
                  >
                    <Link to={"/profile/" + props.data.user._id}>{props.data.user.name}{" "}{props.data.user.surname}</Link>
                  </span>
                </div>
                <div className="comment-subheader">
                  <span style={{ fontSize: "0.7rem" }}>
                    {props.data.user.title}
                  </span>
                </div>
              </Col>
            </div>
          </Row>
          <div className="mt-4">
            <p>{props.data.text}</p>
          </div>
        </Container>
      </>
    );
  }
};

export default Postcard;
