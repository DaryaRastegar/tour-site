import React, { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import { useGetUserProfile } from "../services/queries";
import { useLocalStorage } from "../hooks/localStorage";


const UserContext = createContext();

const initialState = {
  mobile: "",
  email: "",
  fullName: "",
  gender: "",
  birthDate: "",
  nationalCode: null,
  payment: {
    shaba_code: "",
    debitCard_code: "",
    accountIdentifier: "",
  },
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        ...action.payload,
      };
    case "ADD_Number":
      return {
        ...state,
        mobile: action.payload.data.mobile,
      };
    default:
      return new Error("dispatch is not found");
  }
};

function UserContextProvider({ children }) {
  const [value, setValue] = useLocalStorage("user", initialState);
  const [state, dispatch] = useReducer(reducer, value);
  const { data } = useGetUserProfile();

  useEffect(() => {
    if (data && !state.mobile) {
      dispatch({ type: "ADD_Number", payload: data });
    }
  }, [data]);

  useEffect(() => {
    setValue(state);
  }, [state]);


  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const { state, dispatch } = useContext(UserContext);

  return [state, dispatch];
};
export default UserContextProvider;
