export default function DataBox({ title, bgColor, visibility, image, text }) {
  return visibility ? (
    <div className="infoCard">
      <div
        className="elementBox"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {image ? (
          <img className="task3Image" src={image} alt="mushroom" />
        ) : (
          title.toUpperCase()
        )}
      </div>
      <h2 className="task3text">{text}</h2>
    </div>
  ) : null;
}
