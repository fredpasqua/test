import React from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export default function UserBox({
  manufDate,
  streetAddress,
  name,
  image,
  title,
  email,
}) {
  let emailAddress = email.toString();
  const [showModal, setShowModal] = useState(false);
  const onRequestClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="infoCardUser">
        <div className="profileBox">
          <div className="elementBox">
            {image ? (
              <img className="task3Image" src={image} alt="robot face" />
            ) : (
              title.toUpperCase()
            )}
          </div>
          <h2 className="robotName">{name}</h2>
        </div>

        <button
          className="userDetailsButton"
          onClick={() => setShowModal(true)}
        >
          User Details
        </button>
      </div>
      <ReactModal
        isOpen={showModal}
        ariaHideApp={false}
        contentLabel="directory modal"
        shouldReturnFocusAfterClose={true}
        onRequestClose={() => onRequestClose()}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "purple",
          },
          content: {
            left: "10%",
            right: "10%",
          },
        }}
      >
        <FontAwesomeIcon
          className="modalCloseButton"
          onClick={() => onRequestClose()}
          icon={faXmarkCircle}
          style={{ height: "50px", width: "50px", color: "purple" }}
        />

        <p>Name: {name}</p>
        {image ? (
          <img src={image} className="modalImage" alt="robot face" />
        ) : (
          title.toUpperCase()
        )}
        <p className="robotEmail">
          Email: <a href={`mailto:${emailAddress}`}>{email}</a>
        </p>

        <p>Address:</p>
        <p>{streetAddress.address}</p>

        <p>
          {streetAddress.city}, {streetAddress.state} {streetAddress.postalCode}
          <br></br>
        </p>
      </ReactModal>
    </>
  );
}
