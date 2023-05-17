import "../App.css";

const Data = ({ json, setJson }) => {
  return (
    <textarea
      className="json"
      onChange={(event) => {
        setJson(event.target.value);
      }}
    />
  );
};

export default Data;
