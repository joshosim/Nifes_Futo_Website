import { createContext, useReducer } from "react";

export const InfoContext = createContext();

export const infoReducer = (state, action) => {
  switch (action.type) {
    case "SET_INFO":
      return {
        info: action.payload,
      };
    case "CREATE_INFO":
      return {
        info: [action.payload, ...state.info],
      };
    case "DELETE_INFO":
      return {
        info: state.info.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const InfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(infoReducer, { info: [] });

  return (
    <InfoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InfoContext.Provider>
  );
};
