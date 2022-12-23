import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUrlContext } from "../context/UrlContext";

const Redirect = () => {
  const { pathname } = useLocation();
  const { state } = useUrlContext();

  const navigate = useNavigate();

  useEffect(() => {
    const pathExists = state.urls.find(
      (url) => url.from === pathname.replace("/", "")
    );

    if (pathExists) {
      navigate(pathExists.to);
    }
  });

  return <div>Redirect</div>;
};

export default Redirect;
