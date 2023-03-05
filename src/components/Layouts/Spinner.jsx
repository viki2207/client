import React from "react";
import spinner from "../../Assets/img/spinner.gif";
const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      ></img>
    </>
  );
};

export default Spinner;
