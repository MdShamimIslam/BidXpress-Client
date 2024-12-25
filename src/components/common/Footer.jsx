import { FiPhoneOutgoing } from "react-icons/fi";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { ImFacebook } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { Container, PrimaryButton, ProfileCard, Title } from "./Design";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className=" relative bg-primary py-16 overflow-x-hidden">
      {isHomePage && (
        <div className="bg-white w-full py-20 -mt-10 rounded-b-[40px] z-10 absolute top-0"></div>
      )}
      <Container
        className={`${
          isHomePage ? "mt-32" : "mt-0"
        } flex flex-col lg:flex-row md:items-center lg:justify-between gap-12`}
      >
        <div className="w-full md:w-3/4 lg:w-1/3 ">
          <Link to="/">
            <img
              alt="logo"
              className="rounded-full w-[50px] bg-white"
              src="/images/common/bid.png"
            />
          </Link>

          <br />
          <p className="text-gray-300">
            Created with the collaboration of over 60 of the worlds best Nuron
            Artists.
          </p>
          <div className="bg-gray-300 h-[1px] my-8"></div>
          <Title className=" font-normal text-gray-100">
            Get The Latest Nuron Updates
          </Title>
          <div className="flex items-center justify-between mt-5">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-full p-3.5 py-[15px] text-sm border-none outline-none rounded-l-md"
            />
            <PrimaryButton
              btnCl={true}
              className="rounded-none py-3.5 px-8 text-sm rounded-r-md"
            >
              Submit
            </PrimaryButton>
          </div>
          <p className="text-gray-300 text-sm mt-3">
            Email is safe. We dont spam.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-20 lg:gap-8 w-full md:w-2/3">
          <div>
            <Title level={5} className="text-white font-normal">
              Categories
            </Title>
            <ul className="flex flex-col gap-5 mt-8 text-gray-200">
              <p className="hover:text-green cursor-pointer">Watches</p>
              <p className="hover:text-green cursor-pointer">Vehicles</p>
              <p className="hover:text-green cursor-pointer">Electronics</p>
              <p className="hover:text-green cursor-pointer">Real Estate</p>
              <p className="hover:text-green cursor-pointer">Jewelry</p>
              <p className="hover:text-green cursor-pointer">Sports & Outdoor</p>
            </ul>
          </div>
          <div>
            <Title level={5} className="text-white font-normal">
              About Us
            </Title>
            <ul className="flex flex-col gap-5 mt-8 text-gray-200">
              <p className="hover:text-green cursor-pointer">Help</p>
              <p className="hover:text-green cursor-pointer">Affiliates</p>
              <p className="hover:text-green cursor-pointer">Jobs</p>
              <p className="hover:text-green cursor-pointer">Press</p>
              <p className="hover:text-green cursor-pointer">Our blog</p>
              <p className="hover:text-green cursor-pointer">Collectors portal</p>
            </ul>
          </div>
          <div>
            <Title level={5} className="text-white font-normal">
              We Are Here To Help
            </Title>
            <ul className="flex flex-col gap-5 mt-8 text-gray-200">
              <p className="hover:text-green cursor-pointer">Safe and Secure</p>
              <p className="hover:text-green cursor-pointer">Shipping Information</p>
              <p className="hover:text-green cursor-pointer">Contact Us</p>
              <p className="hover:text-green cursor-pointer">Help & FAQ</p>
            </ul>
          </div>
          <div>
            <Title level={5} className="text-white font-normal">
              Follow Us
            </Title>
            <ul className="flex flex-col gap-5 mt-8 text-gray-200">
              <div className="flex items-center gap-2">
                <FiPhoneOutgoing size={19} />
                <span>(015) 71529918</span>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineAttachEmail size={22} />
                <span>bidly@support.com</span>
              </div>
              <div className="flex items-center gap-2">
                <IoLocationOutline size={30} />
                <span>Sector 12, road 7, Uttara, Dhaka</span>
              </div>
            </ul>
            <div className="flex items-center gap-3 mt-5 justify-between">
              <Link>
                <ProfileCard className="bg-white hover:bg-green hover:text-white">
                  <ImFacebook size={22} />
                </ProfileCard>
              </Link>
              <Link>
                <ProfileCard className="bg-white hover:bg-green hover:text-white">
                  <FaInstagram size={22} />
                </ProfileCard>
              </Link>
              <Link>
                <ProfileCard className="bg-white hover:bg-green hover:text-white">
                  <CiTwitter size={22} />
                </ProfileCard>
              </Link>
              <Link>
                <ProfileCard className="bg-white hover:bg-green hover:text-white">
                  <CiLinkedin size={22} />
                </ProfileCard>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
