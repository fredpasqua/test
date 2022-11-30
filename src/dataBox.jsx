export default function DataBox({ title, bgColor, visibility }) {
  return visibility ? (
    <div
      className="elementBox"
      style={{
        backgroundColor: bgColor,
      }}
    >
      {title}
    </div>
  ) : null;
}
