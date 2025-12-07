import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { Link } from "react-router-dom";
import Logo from "../../components/common/Logo";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [userType, setUserType] = useState("buyer")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1500)
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">  
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <Logo/>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-8 mb-2">Create Your Account</h1>
            <p className="text-gray-600 md:text-lg">Join BidXpress and start bidding or selling today</p>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-3">I want to join as a:</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserType("buyer")}
                className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                  userType === "buyer"
                    ? "border-emerald-600 bg-emerald-50 text-emerald-600"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                Buyer
              </button>
              <button
                type="button"
                onClick={() => setUserType("seller")}
                className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                  userType === "seller"
                    ? "border-amber-600 bg-amber-50 text-amber-600"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                }`}
              >
                Seller
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all bg-gray-50 hover:bg-white"
                  required
                />
              </div>
            </div>

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
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all bg-gray-50 hover:bg-white"
                    required
                  />
                </div>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-all bg-gray-50 hover:bg-white"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
              <input
                id="agreeTerms"
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-5 h-5 text-emerald-600 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 mt-0.5 cursor-pointer"
                required
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                I agree to the{" "}
                <Link href="/terms" className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.agreeTerms}
              className="w-full bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white font-bold py-3 rounded-xl transition-all duration-200 
              transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 md:text-lg"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create My Account"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Trendy Visual Design */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-emerald-100 to-amber-50 flex-col justify-center items-center px-12">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-amber-400 to-emerald-500 rounded-full opacity-20 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Animated pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>
        </div>

        {/* Content Cards */}
        <div className="relative z-10 w-full max-w-md space-y-6">
          {/* Welcome card */}
          <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2">
                Join Our Community
              </h2>
              <p className="text-emerald-900 font-medium">Get exclusive benefits as a verified member</p>
            </div>

            {/* Member badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-emerald-900 text-sm">Verified Account</p>
                  <p className="text-xs text-emerald-700">Instant verification badge</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                <span className="text-2xl">💎</span>
                <div>
                  <p className="font-semibold text-emerald-900 text-sm">Premium Access</p>
                  <p className="text-xs text-emerald-700">Unlock exclusive features</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl">
                <span className="text-2xl">🛡️</span>
                <div>
                  <p className="font-semibold text-emerald-900 text-sm">Full Protection</p>
                  <p className="text-xs text-emerald-700">Buyer & seller protection included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats showcase */}
          <div className="grid grid-cols-3 gap-3">
            <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-4 text-center hover:bg-white/40 transition-all">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                45K+
              </p>
              <p className="text-xs text-emerald-900 font-medium">Active Users</p>
            </div>
            <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-4 text-center hover:bg-white/40 transition-all">
              <p className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                10M+
              </p>
              <p className="text-xs text-emerald-900 font-medium">Auctions Monthly</p>
            </div>
            <div className="backdrop-blur-lg bg-white/30 border border-white/40 rounded-2xl p-4 text-center hover:bg-white/40 transition-all">
              <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent">
                98.5%
              </p>
              <p className="text-xs text-emerald-900 font-medium">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}