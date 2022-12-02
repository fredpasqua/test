import React from "react";

export default function UserBox({
  manufDate,
  streetAddress,
  name,
  image,
  title,
  email,
}) {
  let emailAddress = email.toString();
  return (
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
        <h2 className="task3text">{name}</h2>
        <p>D.O.M: {manufDate}</p>
      </div>

      <div className="addressGroup">
        <h2 className="addressHeading">Address:</h2>
        <p>{streetAddress.address}</p>
        <p>
          {streetAddress.city}, {streetAddress.state} {streetAddress.postalCode}
        </p>
        <p>
          <a href={`mailto:${emailAddress}`}>{email}</a>
        </p>
      </div>
    </div>
  );
}
