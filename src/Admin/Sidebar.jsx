import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Caption, CustomNavLink, Title } from "../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, logout, RESET } from "../redux/features/authSlice";

import { useEffect } from "react";
import { useUserProfile } from "../hooks/useUserProfile";
import { Helmet } from 'react-helmet-async';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state?.auth);
  const {role, isLoggedIn} = useUserProfile();

  useEffect(()=>{
    if(isLoggedIn) {
      dispatch(getUserProfile());
    }
    
  },[dispatch, isLoggedIn]);

  const handleLogout = async () => {
    await dispatch(logout());
    dispatch(RESET());
    navigate("/");
  };

  const className =  "flex items-center gap-3 p-3 md:p-4 rounded-lg hover:bg-green_100";

  return (
    <>
    {location?.pathname === "/dashboard" && <Helmet>
        <title>BidXpress | Dashboard</title>
      </Helmet> 
    }
    
    <section className="sidebar flex flex-col h-full">
      <div className="profile flex flex-col items-center gap-4 text-center mb-6">
          <img
            src={user?.photo}
            alt="user-img"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
          />
          <div>
            <Title className="capitalize text-base md:text-lg">{user?.name}</Title>
            <Caption className="text-sm break-all">{user?.email}</Caption>
          </div>
      </div>
      <div className="mt-6 space-y-1 overflow-y-auto lg:overflow-visible max-h-[65vh] lg:max-h-full pr-1">
          <CustomNavLink
            href="/dashboard"
            isActive={location.pathname === "/dashboard"}
            className={className}
          >
            <span>
              <CiGrid41 size={20} />
            </span>
            <span>Dashboard</span>
          </CustomNavLink>

          {(role === "seller" || role === "admin") && (
            <>
              <CustomNavLink
                href="/product"
                isActive={location.pathname === "/product"}
                className={className}
              >
                <span>
                  <MdOutlineCategory size={20} />
                </span>
                <span>My Products</span>
              </CustomNavLink>
              <CustomNavLink
                href="/add"
                isActive={location.pathname === "/add"}
                className={className}
              >
                <span>
                  <FaPlusCircle size={20} />
                </span>
                <span>Create Product</span>
              </CustomNavLink>

            </>
          )}

          {role === "admin" && (
            <>
              <CustomNavLink
                href="/userlist"
                isActive={location.pathname === "/userlist"}
                className={className}
              >
                <span>
                  <FiUser size={20} />
                </span>
                <span>All Users</span>
              </CustomNavLink>

              <CustomNavLink
                href="/product/admin"
                isActive={location.pathname === "/product/admin"}
                className={className}
              >
                <span>
                  <CgProductHunt size={20} />
                </span>
                <span> All Products</span>
              </CustomNavLink>

              <CustomNavLink
                href="/category"
                isActive={location.pathname === "/category"}
                className={className}
              >
                <span>
                  <MdOutlineCategory size={20} />
                </span>
                <span>Categories</span>
              </CustomNavLink>
              <CustomNavLink
                href="/admin/income"
                isActive={location.pathname === "/admin/income"}
                className={className}
              >
                <span>
                  <TbCurrencyDollar size={20} />
                </span>
                <span>Income</span>
              </CustomNavLink>
            </>
          )}

          <CustomNavLink
            href="/winning-products"
            isActive={location.pathname === "/winning-products"}
            className={className}
          >
            <span>
              <RiAuctionLine size={20} />
            </span>
            <span>Winning Bids</span>
          </CustomNavLink>
          <CustomNavLink
            href="/favourite"
            isActive={location.pathname === "/favourite"}
            className={className}
          >
            <span>
              <IoIosHeartEmpty size={20} />
            </span>
            <span>My Favorites</span>
          </CustomNavLink>
          <CustomNavLink
            href="/profile"
            isActive={location.pathname === "/profile"}
            className={className}
          >
            <span>
              <IoSettingsOutline size={20} />
            </span>
            <span>Personal Profile</span>
          </CustomNavLink>

          <div>
            <button
                onClick={handleLogout}
                className="flex w-full items-center justify-center gap-3 mt-4 bg-red-500 hover:bg-red-600 p-3 md:p-4 rounded-lg text-white font-semibold"
                 >
                    <span>
                      <IoIosLogOut size={20} />
                    </span>
                    <span>Log Out</span>
            </button>
          </div>
          
      </div>
    </section>
    </>
  );
};

export default Sidebar;
