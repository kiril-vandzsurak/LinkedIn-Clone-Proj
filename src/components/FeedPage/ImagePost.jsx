import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ImagePost() {
  const user = useSelector((state) => state.profile.profilename);
  const postId = user._id;
  console.log(postId);
  const [show2, setShow2] = useState(false);
  const [image, setImage] = useState(null);
  const handleClose2 = () => setShow2(false);
  const postImage = async (e) => {
    e.preventDefault();
    const postimage = new FormData();

    postimage.append("post", image);

    const options = {
      method: "POST",
      body: postimage,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk2Zjk2NGM5NmRmYjAwMTUyMWE1YzAiLCJpYXQiOjE2NzA4Mzg2MjgsImV4cCI6MTY3MjA0ODIyOH0.S8B9Q1xNG-Qhgqc_VaASpoD_zvjiPjV0ZU2__qRPBEI",
      },
    };

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
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
    <div>
      <Modal.Body className="upload-modal">
        <form onSubmit={postImage}>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </form>
        <Button
          variant="primary"
          onClick={handleClose2}
          type="submit"
          className="btn-3"
        >
          Upload photo
        </Button>
      </Modal.Body>
    </div>
  );
}
