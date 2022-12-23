import React from "react";
import { Link } from "react-router-dom";

const Url = ({ data }) => {
  return (
    <p>
      <Link to={data.from}>
        {data.from} {"->"} {data.to}
      </Link>
    </p>
  );
};

export default Url;
