import { Link } from "react-router-dom";
import logo from "/images/common/logo.png";

const Logo = () => {
  return (
    <Link className="flex items-center gap-3" to="/">
        <img src={logo} alt="logo" className="rounded-full ml-[-5px] w-[30px]"/>
        <h3 className="text-2xl font-bold ml-[-8px]">Bid<span className="text-[#2da515]">X</span>press</h3>
    </Link>
  )
}

export default Logo;