import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { Container } from "../../components/common/Design";

const Hero = () => {

  return (
    <>
    <Helmet>
    <title>BidXpress | Home</title>
    </Helmet>
    
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden mt-12 md:mt-4 lg:mt-0">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50 opacity-60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <Container>
      <div className="relative py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Where Bidding Meets <span className="text-[#216118]">Excitement!</span>
            </h1>
            <p className="md:text-lg text-gray-600 leading-relaxed">
              Experience the thrill of live auctions. Explore rare items, compete with bidders worldwide, and take home
              extraordinary treasures. Your next great find is just a bid away!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-[#216118] text-white px-8 py-3 rounded-lg hover:bg-emerald-900 font-semibold transition shadow-lg hover:shadow-xl text-center">
              Explore Auctions
            </Link>
            <Link 
              to="/login"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 font-semibold transition text-center"
            >
             Join as Buyer
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <span className="text-gray-700">Verified Sellers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-gray-700">Secure Payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
              <span className="text-gray-700">Live Support</span>
            </div>
          </div>
        </div>

      <div className="relative h-96 md:h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-yellow-400/10 rounded-3xl blur-2xl animate-float-x-slow"></div>

        <div className="relative space-y-6">
          <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-emerald-100
                          transform hover:scale-105 transition duration-500 animate-float-x">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-emerald-600">Live Bid</span>
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">+$450</span>
            </div>

            <p className="text-gray-800 font-semibold mb-2">Vintage Rolex Watch</p>
            <p className="text-2xl font-bold text-emerald-600">$5,240</p>
            <p className="text-xs text-gray-500 mt-2">15 bids • Ends in 2h 34m</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-[#216118] p-6 rounded-2xl shadow-xl text-white
                          transform hover:scale-105 transition duration-500 animate-float-x-delayed ml-10">
            <div className="text-sm font-semibold opacity-90 mb-3">Your Balance</div>
            <p className="text-3xl font-bold mb-4">$12,580</p>
            <div className="flex gap-3">
              <div className="w-8 h-6 bg-white/20 rounded opacity-60"></div>
              <div className="text-xs leading-relaxed opacity-80">Add funds anytime</div>
            </div>
          </div>
        </div>
      </div>

      </div>
      </Container>
    </section>
    </>
  );
};

export default Hero;


