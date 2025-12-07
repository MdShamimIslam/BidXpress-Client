import { Link } from "react-router-dom";
import { companyInfos, contactInfos, explores, socials } from "../../utils/data";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 via-[#263b1e] to-slate-900 text-gray-200 pt-12 lg:pt-20 pb-8 mt-2 md:mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="space-y-4">
            <Logo/>
            
            <p className="text-sm text-gray-300">
              Premium auctions — authenticated items, transparent bidding, trusted delivery.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 mt-3"
              aria-label="Subscribe to BidXpress newsletter"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-lg px-3 py-2 text-sm bg-[#2d442f] placeholder-gray-400 focus:outline-none "
              />
              <button
                type="submit"
                className="rounded-r-lg px-4 py-2 bg-[#216118] hover:bg-[#328527] text-white font-medium text-sm"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-400">No spam. Unsubscribe anytime.</p>
          </div>

          <div>
            <h3 className="text-white font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {
                explores?.map(({id, title, href}) => (
                  <li key={id}>
                    <Link to={href} className="hover:text-[#338828] transition">
                      {title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
            {
                companyInfos?.map(({id, title, href}) => (
                  <li key={id}>
                    <Link to={href} className="hover:text-[#338828] transition">
                      {title}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-4 space-y-4  text-gray-300">
              {
                contactInfos?.map(({id, icon:Icon, title, info}) => (
                  <li key={id} className="flex items-start gap-3">
                  <span className="mt-1 text-[#338828]">
                  <span className="w-5 h-5 inline-block">
                    <Icon size={18} />
                  </span>
                  </span>
                  <div>
                    <div className="font-medium text-gray-100 text-sm">{title}</div>
                    <div className="text-xs text-gray-300">{info}</div>
                  </div>
                </li>
                ))
              }
            </ul>

            <div className="mt-5 flex gap-3">
              {
                socials?.map(({id, icon:Icon, href}) => (
                  <Link key={id} to={href} target="_blank" className="w-9 h-9 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition">
                    <Icon size={16} />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6  flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} BidXpress. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link to="/" className="hover:text-[#338828] transition">
              Privacy
            </Link>
            <span className="hidden sm:block">•</span>
            <Link to="/" className="hover:text-[#338828] transition">
              Cookies
            </Link>
            <span className="hidden sm:block">•</span>
            <Link to="/" className="hover:text-[#338828] transition">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
