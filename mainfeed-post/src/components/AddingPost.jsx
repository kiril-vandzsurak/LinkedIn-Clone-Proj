import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { BsThreeDots } from "react-icons/bs";

const AddingPost = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: "450px",
          height: "120px",
          backgroundColor: "lightgrey",
          marginTop: "20px",
          borderRadius: "0.8rem",
        }}
        className="d-flex"
      >
        <div
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            backgroundColor: "white",
            margin: "10px",
            marginLeft: "19px",
          }}
          className="d-flex"
        ></div>
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
            Go somewhere
          </Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "0px" }}>
          <div className="d-flex">
            <div
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                backgroundColor: "black",
                margin: "10px",
                marginLeft: "19px",
              }}
              className="d-flex"
            ></div>
            <div className="d-flex flex-column justify-content-center">
              <p style={{ margin: "0px" }}>Name Surname</p>
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
                onClick={handleClose}
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
