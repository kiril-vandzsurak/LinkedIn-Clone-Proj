import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { TbSend } from "react-icons/tb";

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
                    <Link to={"/profile/" + props.data.user._id}>
                      {props.data.user.name} {props.data.user.surname}
                    </Link>
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
            <span>
              <img src="image3.jpg" className="comment-image" />
            </span>
          </div>
          <hr />
          <div className="icons-div-comment mt-3">
            <div className="comment-icon btn">
              <span>
                <AiOutlineLike />
              </span>
              <span>Like</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <BsChatText />
              </span>
              <span>Comment</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <BiRepost />
              </span>
              <span>Repost</span>
            </div>
            <div className="comment-icon btn">
              <span>
                <TbSend />
              </span>
              <span>Send</span>
            </div>
          </div>
        </Container>
      </>
    );
  }
};

export default Postcard;
