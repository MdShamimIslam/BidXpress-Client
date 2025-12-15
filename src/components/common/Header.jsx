import { Container, CustomNavLink, CustomNavLinkList, ProfileCard } from "./Design";
import { menulists } from "../../utils/data";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShowOnLogin, ShowOnLogout } from "../../utils/HiddenLink";
import { useSelector } from "react-redux";
import Logo from "./Logo";

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

  return (
      <header className={`header bg-white shadow-s1 ${isScrolled ? "scrolled" : ""}`}>
        <Container>
          <nav className="py-4 flex justify-between items-center relative pointer-events-auto">
            <Logo/>
             
            <div className="hidden lg:flex items-center justify-between gap-8">
                {menus?.map((list) => (
                  <li key={list.id} className="capitalize list-none">
                    <CustomNavLinkList
                      href={list.path}
                      isActive={location.pathname === list.path}
                    >
                      {list.link}
                    </CustomNavLinkList>
                  </li>
                ))}
            </div>

            <div className="flex items-center">
              <div className="hidden lg:flex lg:items-center lg:gap-4 text-white">
                <ShowOnLogout>
                  <CustomNavLink
                    href="/login"
                    className="bg-gradient-to-r from-[#51d4b3] to-[#144426] px-6 py-2 rounded-full text-white hover:text-white shadow-md"
                  >
                     Sign in
                  </CustomNavLink>
                  <CustomNavLink
                    href="/register"
                    className={` bg-gradient-to-r from-[#6fd361] to-[#1b3618] px-6 py-2 rounded-full text-white hover:text-white shadow-md`}
                  >
                    Register
                  </CustomNavLink>
                </ShowOnLogout>
                <ShowOnLogin>
                    <CustomNavLink href="/dashboard">
                      <ProfileCard>
                        <img
                          src={user?.photo}
                          alt="profile-image"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </ProfileCard>
                    </CustomNavLink>
                </ShowOnLogin>
              </div>

              <div className="flex items-center justify-center gap-2">
              <ShowOnLogin>
                    <CustomNavLink href="/dashboard" className="lg:hidden">
                      <ProfileCard>
                        <img
                          src={user?.photo}
                          alt="profile-image"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </ProfileCard>
                    </CustomNavLink>
                </ShowOnLogin>
                <button
                  onClick={toggleMenu}
                  className="lg:hidden w-8 h-8 rounded-xl flex justify-center items-center focus:outline-none"
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
              className={`lg:hidden rounded-2xl bg-gradient-to-r from-[#6fd361] to-[#1b3618] lg:items-center lg:w-auto w-1/2 md:w-1/3 p-5 absolute right-0 top-full 
                menu-container ${isOpen ? "open pointer-events-auto" : "closed pointer-events-none"}`}
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

            {!isLoggedIn && <>
              <li className="capitalize list-none my-8 text-center " >
                  <CustomNavLink href="/login" className="text-white">
                    Sign in
                  </CustomNavLink>
              </li>
              <li className="capitalize list-none my-8 text-center " >
                  <CustomNavLink href="/register" className="text-white">
                    Register
                  </CustomNavLink>
              </li>
            </>}  
            </div>
          </nav>
        </Container>
      </header>
  );
};

export default Header;
