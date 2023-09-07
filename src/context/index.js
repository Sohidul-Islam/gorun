import { createContext, useContext, useMemo, useReducer } from "react";
import { currentUserInit, currentUserReducer } from "./currentUser";
import { generalInit, generalReducer } from "./general";

/*
Global Store
*/
const Context = createContext();
/*
Global Store Provider
*/
export default function ContextProvider({ children }) {
  const [currentUser, dispatchCurrentUser] = useReducer(
    currentUserReducer,
    currentUserInit
  );

  const [general, dispatchGeneral] = useReducer(generalReducer, generalInit);

  const value = useMemo(
    () => ({
      currentUser,
      dispatchCurrentUser,
      general,
      dispatchGeneral,
    }),
    [currentUser, general]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
/*
Wrapper for using Global Store
*/
export const useGlobalContext = () => useContext(Context);
