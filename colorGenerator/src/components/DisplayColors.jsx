import SingleColor from "./SingleColor";

const DisplayColors = ({ list }) => {
  if (!Array.isArray(list)) return null;

  return (
    <div className="colors-box">
      {list.map((hex, index) => (
        <SingleColor key={index} hexColor={hex} />
      ))}
    </div>
  );
};

export default DisplayColors;