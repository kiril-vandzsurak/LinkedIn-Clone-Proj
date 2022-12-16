import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { MdOutlinePhotoCamera } from "react-icons/md";

function SecondModal() {
  const profileDetails = useSelector((state) => state.profile.profilename);
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div
        className="modal-icon-upload text-white"
        onClick={() => setLgShow(true)}
      >
        <span>
          <MdOutlinePhotoCamera />
        </span>
        <span>Add Photo</span>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Profile Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="second-modal-body">
          <h2 className="text-center">
            {profileDetails.name}, help others recognize you!
          </h2>
          <div className="profile-image-modal">
            <img
              src={profileDetails.image}
              alt="profilepicture"
              className="uplaod-image"
            />
          </div>
          <div className="mt-5">
            <span>
              On LinkedIn, we require members to use their real identities, so
              take or upload a photo of yourself. Then crop, filter, and adjust
              it to perfection.
            </span>
          </div>
        </Modal.Body>
        <Modal.Body className="second-modal-button">
          <div className="btn">Use camera</div>
          <form className="btn">
            <input type="file" multiple accept="image/*" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SecondModal;
