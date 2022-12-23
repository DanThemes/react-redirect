import React from "react";

const Url = ({ data }) => {
  return (
    <p>
      {data.from} - {data.to}
    </p>
  );
};

export default Url;
