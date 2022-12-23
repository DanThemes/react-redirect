import React from "react";
import Url from "../components/Url";
import { useUrlContext } from "../context/UrlContext";

const Home = () => {
  const { state, dispatch } = useUrlContext();
  return (
    <div>
      {state.urls.map((url, idx) => (
        <Url key={idx} data={url} />
      ))}
    </div>
  );
};

export default Home;
