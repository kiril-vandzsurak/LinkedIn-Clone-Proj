import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { makePostAction } from "../redux/actions";

const AddingPost = () => {
  const user = useSelector((state) => state.profile.profilename);
  const userID = user._id;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [post, setPost] = useState("");

  const postToSend = {
    text: post,
  };

  const onChangeHandler = (value, fieldToSet) => {
    fieldToSet(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makePostAction(postToSend, userID));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "100%",
          height: "120px",
          backgroundColor: "lightgrey",
          marginTop: "20px",
          borderRadius: "0.8rem",
        }}
        className="d-flex"
      >
        <div>
          {" "}
          <img src={user.image} alt="profileimage" className="post-pic-main" />
        </div>
        <div>
          <Button
            onClick={handleShow}
            style={{
              borderRadius: "50px",
              height: "55px",
              width: "350px",
              marginTop: "10px",
              border: "1px lightgrey solid",
            }}
          >
            What do you want to post?
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0px" }}>
          <div className="d-flex">
            <div>
              {" "}
              <img src={user.image} alt="profileimage" className="post-pic" />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <p style={{ margin: "0px" }}>
                {user.name} {user.surname}
              </p>
              <Button
                style={{
                  borderRadius: "50px",
                  height: "38px",
                  width: "106px",
                }}
              >
                Anyone
              </Button>
            </div>
          </div>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="What do you want to talk about?"
                onChange={(e) => onChangeHandler(e.target.value, setPost)}
                style={{ border: "none" }}
              />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <MdOutlinePhotoSizeSelectActual style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="light"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <AiFillYoutube style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="light"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <HiOutlineDocumentChartBar style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="light"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <BsThreeDots style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="light"
                style={{
                  borderRadius: "50px",
                  height: "30px",
                  width: "80px",
                  fontSize: "10px",
                  marginLeft: "15px",
                }}
              >
                Anyone
              </Button>
            </div>
            <div className="d-flex align-items-center">
              <Button
                variant="light"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              >
                <BsThreeDots style={{ fontSize: "20px" }} />
              </Button>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                  handleClose();
                }}
                style={{
                  borderRadius: "50px",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Post
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default AddingPost;
