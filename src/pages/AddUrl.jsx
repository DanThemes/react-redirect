import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS } from "../context/UrlActions";
import { useUrlContext } from "../context/UrlContext";

const AddUrl = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const { state, dispatch } = useUrlContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!from || !to) return;

    dispatch({ type: ACTIONS.ADD_URL, payload: { from, to } });
    setFrom("");
    setTo("");
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={from}
          placeholder="From"
          onChange={(e) => setFrom(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={to}
          placeholder="To"
          onChange={(e) => setTo(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUrl;
