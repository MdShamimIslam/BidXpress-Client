import { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  Caption,
  commonClassNameOfInput,
  CustomNavLink,
  PrimaryButton,
  Title,
} from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../redux/features/authSlice";
import { Helmet } from "react-helmet-async";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, isLoggedIn} = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    const userData = { email, password };

    dispatch(login(userData));
    
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
      toast.success("Successfully Login");
    }
    
  }, [isLoggedIn, navigate]);

  return (
    <>
    <Helmet>
      <title>BidXpress | Login</title>
    </Helmet>
      <section className="regsiter pt-16 relative">
        <div
          className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl
         absolute top-2/3"
        ></div>
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl"
        >
          <div className="text-center">
            <Title level={5}>New Member</Title>
            <p className="mt-2 text-lg">
              Do you already have an account?{" "}
              <CustomNavLink href="/register">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input
              value={email}
              onChange={handleInputChange}
              type="email"
              name="email"
              className={`${commonClassNameOfInput} rounded-md`}
              placeholder="Enter Email"
            />
          </div>
          <div className="relative">
            <Caption className="mb-2">Password *</Caption>
            <input
              value={password}
              onChange={handleInputChange}
              type={showPassword ? "text" : "password"}
              name="password"
              className={`${commonClassNameOfInput} rounded-md`}
              placeholder="Enter Password"
            />
            <span
              className="absolute top-14 right-4 text-slate-500 cursor-pointer"
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
            className="w-full rounded-lg my-5"
          >
            {isLoading ? "PROCESSING" : "LOGIN"}
          </PrimaryButton>  
          <p className="text-lg text-center">Don't have an account? Please <Link to='/register' className="text-green">Sign Up</Link></p>   
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};

export default Login;
