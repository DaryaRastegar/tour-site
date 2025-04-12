import { useNavigate } from "react-router-dom";
import { useTokenContext } from "../context/TokenContextProvider";

export const useLogOut = () => {
  const [, setAccessToken] = useTokenContext();
  const navigate = useNavigate();
  return () => {
    setCookie("accessToken", "", -1);
    setCookie("refreshToken", "", -1);
    setAccessToken("");
    navigate("/");
    // window.location.reload();
    // navigate("/");
  };
};
