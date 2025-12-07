import { useState } from "react";
import {Caption,PrimaryButton,Title, commonClassNameOfInput} from "../../components/common/Design";
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
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginAssSeller = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("All fields are required");
    }

    const userData = { email, password };
    
    try {
     const res =  await dispatch(loginUserAsSeller(userData)).unwrap();
   
      if (res?.role === "seller") {
        toast.success("Seller Login Successfull");
        navigate("/dashboard")
      }
      
    } catch (error) {
      toast.error(error|| "Failed to switch to Seller");
    }

  };

  return (
    <>
    <Helmet>
    <title>BidXpress | Seller Login</title>
    </Helmet>
      <section className="regsiter pt-16 relative">
        <form
          onSubmit={handleLoginAssSeller}
          className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl"
        >
          <div className="text-center">
            <Title level={5}>Switch to Seller</Title>
            <p className="mt-2 text-lg">
              Complete this form to start selling.
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Email *</Caption>
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
            <Caption>I agree to the terms & policy</Caption>
          </div>
          <PrimaryButton className="w-full rounded-lg my-5">
          {isLoading ? "Processing" : " Become Seller"} 
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};

export default LoginAsSeller;
