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
import { useRedirectLoggedOutUser } from "../hooks/useRedirectLoggedOutUser";
import { useEffect } from "react";
import { useUserProfile } from "../hooks/useUserProfile";

const Sidebar = () => {
  useRedirectLoggedOutUser("/login");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user} = useSelector(state => state?.auth);


  const {role, isLoggedIn} = useUserProfile();

  useEffect(()=>{
    if(isLoggedIn) {
      dispatch(getUserProfile());
    }
    
  },[dispatch,isLoggedIn]);

  // logout functionality
  const handleLogout = async () => {
    await dispatch(logout());
    dispatch(RESET());
    navigate("/");
  };

  const className = "flex items-center gap-3 p-4 rounded-full";

  return (
    <>
      <section className="sidebar flex flex-col justify-between h-full">
        <div className="profile flex items-center text-center justify-center gap-8 flex-col">
          <img
            src={user?.photo}
            alt="user-img"
            className="w-32 h-32 rounded-full object-cover"
          />
          <div>
            <Title className="capitalize">{user?.name}</Title>
            <Caption>{user?.email}</Caption>
          </div>
        </div>
        <div className="mt-8">
          <CustomNavLink
            href="/dashboard"
            isActive={location.pathname === "/dashboard"}
            className={className}
          >
            <span>
              <CiGrid41 size={22} />
            </span>
            <span>Dashbaord</span>
          </CustomNavLink>

          {(role === "seller" || role === "admin") && (
            <>
              <CustomNavLink
                href="/product"
                isActive={location.pathname === "/product"}
                className={className}
              >
                <span>
                  <MdOutlineCategory size={22} />
                </span>
                <span>My Products</span>
              </CustomNavLink>
              <CustomNavLink
                href="/add"
                isActive={location.pathname === "/add"}
                className={className}
              >
                <span>
                  <FaPlusCircle size={22} />
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
                  <FiUser size={22} />
                </span>
                <span>All User</span>
              </CustomNavLink>

              <CustomNavLink
                href="/product/admin"
                isActive={location.pathname === "/product/admin"}
                className={className}
              >
                <span>
                  <CgProductHunt size={22} />
                </span>
                <span> All product List</span>
              </CustomNavLink>

              <CustomNavLink
                href="/category"
                isActive={location.pathname === "/category"}
                className={className}
              >
                <span>
                  <MdOutlineCategory size={22} />
                </span>
                <span>Categories</span>
              </CustomNavLink>
              <CustomNavLink
                href="/admin/income"
                isActive={location.pathname === "/admin/income"}
                className={className}
              >
                <span>
                  <TbCurrencyDollar size={22} />
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
              <RiAuctionLine size={22} />
            </span>
            <span>Winning Bids</span>
          </CustomNavLink>
          <CustomNavLink
            href="/favourite"
            isActive={location.pathname === "/favourite"}
            className={className}
          >
            <span>
              <IoIosHeartEmpty size={22} />
            </span>
            <span>My Favorites</span>
          </CustomNavLink>
          <CustomNavLink
            href="/profile"
            isActive={location.pathname === "/profile"}
            className={className}
          >
            <span>
              <IoSettingsOutline size={22} />
            </span>
            <span>Personal Profile</span>
          </CustomNavLink>

          <button
            onClick={handleLogout}
            className="flex items-center font-semibold w-full gap-3 mt-4 bg-red-500 mb-3 hover:text-white p-4 rounded-lg text-white"
          >
            <span>
              <IoIosLogOut size={22} />
            </span>
            <span>Log Out</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
