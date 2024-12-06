import { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, RESET } from "../../redux/features/authSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, message, isSuccess, isError } = useSelector(
    (state) => state.auth
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("All fields are required");
    }
    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }
    const userData = { name, email, password };

    dispatch(register(userData));
    
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Registration successful. Please login now!");
      navigate("/login");
    }
    
    if (isError) {
      toast.error(message || "Registration Failed");
    }

    return () => {
      dispatch(RESET());
    };
  }, [dispatch, isSuccess, isError, message, navigate]);

  return (
    <>
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Sign Up
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Sign Up
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl"
        >
          <div className="text-center">
            <Title level={5}>Sign Up</Title>
            <p className="mt-2 text-lg">
              Do you already have an account?{" "}
              <CustomNavLink href="/login">Log In Here</CustomNavLink>
            </p>
          </div>
          <div className="mt-10">
            <Caption className="mb-2">Username *</Caption>
            <input
              value={name}
              onChange={handleInputChange}
              type="text"
              name="name"
              className={commonClassNameOfInput}
              placeholder="First Name"
            />
          </div>
          <div className="mt-5">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className={commonClassNameOfInput}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="relative mt-5">
            <Caption className="mb-2">Password *</Caption>
            <input
              value={password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              name="password"
              className={commonClassNameOfInput}
              placeholder="Enter Your Password"
            />
            <span
              className="absolute top-12 right-4 text-slate-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative mt-5">
            <Caption className="mb-2">Confirm Password *</Caption>
            <input
              value={confirmPassword}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              className={commonClassNameOfInput}
              placeholder="Confirm password"
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
          <PrimaryButton 
          disabled={isLoading} 
          className="w-full rounded-none my-5">
            {isLoading ? "PROCESSING" : "CREATE ACCOUNT"}
          </PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>OR SIGNUP WITH</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">SIGNUP WHIT GOOGLE</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">SIGNUP WHIT FACEBOOK</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            By clicking the signup button, you create a Cobiro account, and you
            agree to Cobiros{" "}
            <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};

export default Register;
