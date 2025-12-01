import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "./Design";
import { menulists } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../../utils/HiddenLink";
import { useSelector } from "react-redux";
import logo from "/images/common/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const { user, isLoggedIn } = useSelector((state) => state?.auth);

  const menus = menulists(isLoggedIn);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user, isLoggedIn]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <header className={isHomePage ? `header py-1 bg-primary ${isScrolled ? "scrolled" : ""}`: `header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
        <Container>
          <nav className="p-4 flex justify-between items-center relative">
            <div className="flex items-center gap-14">
              <Link className="flex items-center gap-3" to="/">
                <img
                  src={logo}
                  alt=""
                  className="rounded-full ml-[-25px] md:ml-[-25px] lg:ml-[-20px] w-[35px]"
                />
                <h3
                  className={`${
                    isScrolled || !isHomePage ? "text-black" : "text-white"
                  } text-2xl font-bold`}
                >
                  BidXpress
                </h3>
              </Link>
              <div className="hidden lg:flex items-center justify-between gap-8">
                {menus?.map((list) => (
                  <li key={list.id} className="capitalize list-none">
                    <CustomNavLinkList
                      href={list.path}
                      isActive={location.pathname === list.path}
                      className={`${
                        isScrolled || !isHomePage ? "text-black" : "text-white"
                      }`}
                    >
                      {list.link}
                    </CustomNavLinkList>
                  </li>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-8 icons ">
              <div className="hidden lg:flex lg:items-center lg:gap-8 text-white">
                {isLoggedIn && user?.role === "buyer" && (
                  <ShowOnLogin>
                    <NavLink
                    to="/seller/login"
                    className={`${
                      isScrolled || !isHomePage
                        ? "text-white bg-primary "
                        : "bg-green text-white"
                    } px-8 py-2 rounded-full`}
                  >
                     Become a Seller
                  </NavLink>
                  </ShowOnLogin>
                )}
                <ShowOnLogout>
                  <CustomNavLink
                    href="/login"
                    className={`${
                      isScrolled || !isHomePage ? "text-black" : "text-white"
                    }`}
                  >
                    Sign in
                  </CustomNavLink>
                  <CustomNavLink
                    href="/register"
                    className={`${
                      !isHomePage || isScrolled
                        ? "hover:bg-green bg-primary text-white "
                        : "bg-white hover:bg-green "
                    } px-8 py-2 rounded-full text-primary hover:text-white shadow-md`}
                  >
                    Join
                  </CustomNavLink>
                </ShowOnLogout>
                <ShowOnLogin>
                  <div className="ml-24">
                    <CustomNavLink href="/dashboard">
                      <ProfileCard>
                        <img
                          src={user?.photo}
                          alt="profile-image"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </ProfileCard>
                    </CustomNavLink>
                  </div>
               
                </ShowOnLogin>
              </div>
              <div
                className={`icon flex items-center justify-center gap-6 ${
                  isScrolled || !isHomePage ? "text-primary" : "text-white"
                }`}
              >
                <button
                  onClick={toggleMenu}
                  className="lg:hidden w-10 h-10 rounded-xl flex justify-center items-center bg-black text-white focus:outline-none"
                >
                  {isOpen ? (
                    <AiOutlineClose size={24} />
                  ) : (
                    <AiOutlineMenu size={24} />
                  )}
                </button>
              </div>
            </div>
            <div
              ref={menuRef}
              className={`lg:hidden rounded-2xl lg:items-center lg:w-auto w-1/2 md:w-1/3 p-5 absolute right-0 top-full 
                menu-container ${isOpen ? "open" : "closed"}`}
            >
              {menus.map((list) => (
                <li
                  key={list.id}
                  className="capitalize list-none my-8 text-center "
                >
                  <CustomNavLink href={list.path} className="text-white">
                    {list.link}
                  </CustomNavLink>
                </li>
              ))}
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
