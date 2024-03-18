import { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

export const useInfoContext = () => {
  const context = useContext(InfoContext);

  if (!context) {
    throw Error("useInfoContext must be used inside an InfoProviderContext");
  }

  return context;
};
