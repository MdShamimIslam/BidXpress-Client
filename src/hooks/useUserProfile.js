import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/features/authSlice";

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && !user && !isLoading) {
      dispatch(getUserProfile());
    }
  }, [dispatch, user, isLoading]);

  return {
    role: user?.role,
    isLoading,
    isLoggedIn
  };
};




