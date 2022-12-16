import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";

const UploadModal = () => {
  const [showImage, setShowImage] = useState(null);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", showImage);

    const options = {
      method: "POST",
      body: data,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      },
    };

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6396f964c96dfb001521a5c0/picture",
        options
      );
      if (response.ok) {
        console.log(response);
        window.location.reload();
        alert("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show2} onHide={handleClose2}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Image</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={uploadImage}>
          <input
            type="file"
            onChange={(e) => setShowImage(e.target.files[0])}
          />
          <Button
            variant="primary"
            onClick={handleClose2}
            type="submit"
            className="float-right"
          >
            Post Image
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default UploadModal;
