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
  user,
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
          <p className="robotName">{user.company.title}</p>
        </div>

        <button
          className="userButton"
          onClick={() => {
            setShowModal(true);
          }}
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
            backgroundColor: "#ddd9f9",
          },
        }}
      >
        <FontAwesomeIcon
          className="modalCloseButton"
          onClick={() => onRequestClose()}
          icon={faXmarkCircle}
          style={{ height: "40px", width: "40px", color: "purple" }}
        />
        <div className="modalContainer">
          <div className="modalLeft">
            {image ? (
              <img src={image} className="modalImage" alt="robot face" />
            ) : (
              title.toUpperCase()
            )}
            <p>Name: {name}</p>
          </div>
          <div className="modalRight">
            <p>Department: {user.company.department}</p>
            <p>Title: {user.company.title}</p>
            <p>Gender Identity: {user.gender}</p>
            <p>Model#: {user.ssn}</p>
            <p>Weight: {user.weight} Kg</p>
            <br></br>
            <p className="email">
              Email: <a href={`mailto:${emailAddress}`}>{email}</a>
            </p>
            <p>Address: {streetAddress.address}</p>

            <p>
              {streetAddress.city}, {streetAddress.state}{" "}
              {streetAddress.postalCode}
              <br></br>
            </p>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
