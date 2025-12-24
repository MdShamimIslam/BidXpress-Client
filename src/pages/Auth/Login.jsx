import { useEffect, useState } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import Logo from "../../components/common/Logo"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../../redux/features/authSlice";
import { Helmet } from "react-helmet-async";

const initialState = {
  email: "",
  password: "",
};

export default function Login() {
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

  const handleSubmit = (e) => {
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
    }
    
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Helmet>
        <title>BidXpress | Login</title>
      </Helmet>
      <div className="min-h-screen bg-white flex">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <Logo/>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-8  mb-3">Welcome Back</h1>
              <p className="text-gray-600 text-lg">Sign in to your account and continue bidding</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all bg-gray-50 hover:bg-white"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-900">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all bg-gray-50 hover:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                />
                <label htmlFor="remember" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                  Keep me logged in
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full  bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white font-bold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Trendy Visual Design */}
        <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100 to-amber-50 flex-col justify-center items-center px-12">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Floating gradient orbs */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-amber-400 to-emerald-500 rounded-full opacity-20 blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.05) 25%, rgba(0,0,0,0.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05) 76%, transparent 77%, transparent)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
          </div>

          {/* Content Cards */}
          <div className="relative z-10 w-full max-w-md">
            {/* Main glassmorphic card */}
            <div className="backdrop-blur-xl bg-white/30 border border-white/50 rounded-3xl p-8 shadow-2xl mb-6 hover:shadow-3xl transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="text-6xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-4">
                    60%
                  </div>
                </div>
                <p className="text-emerald-900 font-bold text-xl">Complete Your Profile</p>
                <p className="text-emerald-700 text-sm mt-2">Unlock premium features with a complete profile</p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/50 rounded-full h-3 overflow-hidden mb-6">
                <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full w-3/5 rounded-full transition-all duration-500" />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/40 rounded-xl p-3">
                  <p className="text-2xl font-bold text-emerald-600">8.9K</p>
                  <p className="text-xs text-gray-700">Auctions</p>
                </div>
                <div className="bg-white/40 rounded-xl p-3">
                  <p className="text-2xl font-bold text-amber-600">98%</p>
                  <p className="text-xs text-gray-700">Trust</p>
                </div>
                <div className="bg-white/40 rounded-xl p-3">
                  <p className="text-2xl font-bold text-emerald-600">4.9★</p>
                  <p className="text-xs text-gray-700">Rating</p>
                </div>
              </div>
            </div>

            {/* Feature pills */}
            <div className="space-y-3">
              <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    ⚡
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">Fast Checkout</p>
                    <p className="text-xs text-emerald-700">One-click bidding</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    🔒
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">100% Secure</p>
                    <p className="text-xs text-emerald-700">End-to-end encrypted</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl px-6 py-4 hover:bg-white/30 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                    ✨
                  </div>
                  <div>
                    <p className="font-semibold text-emerald-900">Premium Features</p>
                    <p className="text-xs text-emerald-700">Exclusive perks included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
