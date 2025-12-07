import { useLocation } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({children}) => {
  const location = useLocation();

  const hiddenRoutes = ["/login", "/register"];

  const isHidden = hiddenRoutes.includes(location.pathname);

  return (
    <div >
      {!isHidden && <Header />}
      <main>{children}</main>
      {!isHidden && <Footer />}
    </div>
  )
}

export default Layout;