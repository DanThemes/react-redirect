import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./UrlActions";

const INITIAL_VALUES = {
  urls: [
    {
      from: "1",
      to: "2",
    },
  ],
};

const UrlContext = createContext(INITIAL_VALUES);

export const useUrlContext = () => {
  return useContext(UrlContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_URL:
      return {
        urls: [
          ...state.urls,
          { from: action.payload.from, to: action.payload.to },
        ],
      };
    default:
      return state;
  }
};

export const UrlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("urls")) || INITIAL_VALUES
  );

  useEffect(() => {
    localStorage.setItem("urls", JSON.stringify(state));
  }, [state]);

  return (
    <UrlContext.Provider value={{ state, dispatch }}>
      {children}
    </UrlContext.Provider>
  );
};
