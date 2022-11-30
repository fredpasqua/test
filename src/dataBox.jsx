export default function DataBox({ title, bgColor, visibility, image }) {
  return visibility ? (
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
  ) : null;
}
