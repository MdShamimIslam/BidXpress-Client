import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../redux/services/authFeature";

export const useRedirectLoggedOutUser = (path) => {
  const naviagte = useNavigate();

  useEffect(() => {
    let isLoggedIn;

    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.getLogInStatus();
      } catch (error) {
        console.log(error?.message);
      }
      
      if (!isLoggedIn) {
       
        naviagte(path);
        return;
      }
    };

    redirectLoggedOutUser();

  }, [path,naviagte]);
};


