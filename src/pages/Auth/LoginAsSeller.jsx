import { useState } from "react";
import {
  Caption,
  Container,
  CustomNavLink,
  PrimaryButton,
  Title,
  commonClassNameOfInput,
} from "../../components/common/Design";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUserAsSeller } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const initialState = {
  email: "",
  password: "",
};

const LoginAsSeller = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginAssSeller = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    const userData = { email, password };

    dispatch(loginUserAsSeller(userData));
    Navigate("/dashboard")
  };

  return (
    <>
    <Helmet>
    <title>BidXpress | Seller Login</title>
    </Helmet>
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Login Seller
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Seller
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form
          onSubmit={handleLoginAssSeller}
          className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl"
        >
          <div className="text-center">
            <Title level={5}>New Seller Member</Title>
            <p className="mt-2 text-lg">
              Do you already have an account?{" "}
              <CustomNavLink href="/create-account">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className={`${commonClassNameOfInput} rounded-lg`}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative">
            <Caption className="mb-2">Password *</Caption>
            <input
              value={password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              name="password"
              className={`${commonClassNameOfInput} rounded-lg`}
              placeholder="Enter Your Password"
            />
            <span
              className="absolute top-12 right-4 text-slate-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" />
            <Caption>I agree to the Terms & Policy</Caption>
          </div>
          <PrimaryButton className="w-full rounded-lg my-5 uppercase">
          {isLoading ? "Processing" : " Become Seller"} 
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default LoginAsSeller;
