import React, { useContext, useState, useEffect } from "react";
import { getCookie, setCookie } from "../utils/cookie";
import { createContext } from "react";

const TokenContext = createContext();
function TokenContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(() =>
    getCookie("accessToken"),
  );
  console.log(accessToken);

  useEffect(() => {
    const token = getCookie("accessToken");
    if (token) {
      setAccessToken(token);
    } else {
      setAccessToken("");
    }
  }, [accessToken]);

  const logout = () => {
    setCookie("accessToken", "", 0); // Clear access token cookie
    setCookie("refreshToken", "", 0); // Clear refresh token cookie
    setAccessToken(""); // Update state with an empty string
  };

  return (
    <TokenContext.Provider value={{ accessToken, setAccessToken, logout }}>
      {children}
    </TokenContext.Provider>
  );
}

export const useTokenContext = () => {
  const { accessToken, setAccessToken, logout } = useContext(TokenContext);

  return [accessToken, setAccessToken, logout];
};
export default TokenContextProvider;
