import React from "react";
import ReactModal from "react-modal";
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
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="infoCardUser">
        <div className="profileBox">
          <div
            className="elementBox"
            // style={{
            //   backgroundColor: bgColor,
            // }}
          >
            {image ? (
              <img className="task3Image" src={image} alt="robot face" />
            ) : (
              title.toUpperCase()
            )}
          </div>
          <h2 className="robotName">{name}</h2>
        </div>

        <div className="addressGroup">
          <h2 className="addressHeading">Address:</h2>
          <p>{streetAddress.address}</p>
          <br></br>
          <p>
            {streetAddress.city}, {streetAddress.state}{" "}
            {streetAddress.postalCode}
            <br></br>
          </p>
          <p className="robotEmail">
            <a href={`mailto:${emailAddress}`}>{email}</a>
          </p>
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
      >
        <button className="modalCloseButton" onClick={() => handleCloseModal()}>
          X
        </button>
        <p>{name}</p>
        <p className="robotEmail">
          <a href={`mailto:${emailAddress}`}>{email}</a>
        </p>
        <h2 className="addressHeading">Address:</h2>
        <p>{streetAddress.address}</p>
      </ReactModal>
    </>
  );
}
