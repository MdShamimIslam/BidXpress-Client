import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/features/authSlice";

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user, isLoading } = useSelector((state) => state.auth);
  const [role, setRole] = useState(
    () => user?.role || JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    if (isLoading && !user) {
      dispatch(getUserProfile());
    } else if (user) {
      setRole(user?.role);
    }
    
  }, [dispatch, isLoading, user]);


  useEffect(() => {
    if (user) {
      setRole(user?.role);
    }
  }, [user]);

  return { role, isLoading, isLoggedIn };
};
