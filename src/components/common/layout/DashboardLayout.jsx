import { useLocation } from "react-router-dom";
import Sidebar from "../../../Admin/Sidebar";
import { useUserProfile } from "../../../hooks/useUserProfile";
import { Container } from "../Design";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserProfile } from "../../../redux/features/authSlice";

const DashboardLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const { role , isLoggedIn } = useUserProfile();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserProfile());
    }
    
  }, [location, dispatch, isLoggedIn]);


  return (
      <div className=" mt-28 lg:mt-32 mb-8 md:mb-0 lg:mb-12">
        <Container className="flex flex-col lg:flex-row gap-6">
          <div className={` w-full lg:w-[25%] ${role === "admin" ? "lg:min-h-[100vh]" : ""} shadow-s1 p-5 rounded-xl`}>
            <Sidebar role={role} />
          </div>
          <div className="w-full lg:w-[75%]">
            {children}
          </div>        
        </Container>
      </div>
  );
};

export default DashboardLayout;
