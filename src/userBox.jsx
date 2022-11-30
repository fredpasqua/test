export default function UserBox({ name }) {
  return (
    <div className="infoCard">
      <div
        className="elementBox"
        // style={{
        //   backgroundColor: bgColor,
        // }}
      >
        {/* {image ? (
          <img className="task3Image" src={image} alt="mushroom" />
        ) : (
          title.toUpperCase()
        )} */}
      </div>
      <h2 className="task3text">{name}</h2>
    </div>
  );
}
