import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./utils/ScrollToTop";
import Layout from "./components/common/layout/Layout";
import Home from "./pages/Home/Home";
import ProductsDetails from "./pages/Product/ProductsDetails";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./router/PrivateRoute";
import Register from "./pages/Auth/Register";
import DashboardLayout from "./components/common/layout/DashboardLayout";
import AddProduct from "./pages/Product/AddProduct";
import ProductEdit from "./pages/Product/ProductEdit";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminProductList from "./Admin/AdminProduct/AdminProductList";
import UpdateProductByAdmin from "./Admin/AdminProduct/UpdateProductByAdmin";
import UserList from "./Admin/UserList";
import WinningBidList from "./pages/Product/WinningBidList";
import UserProfile from "./pages/Auth/UserProfile";
import Catgeorylist from "./Admin/Category/Catgeorylist";
import CreateCategory from "./Admin/Category/CreateCategory";
import UpdateCategory from "./Admin/Category/UpdateCategory";
import NotFound from "./components/common/NotFound";
import ProductList from "./pages/Product/ProductList";
import AllProducts from "./pages/Product/AllProducts";
import FavouriteProductList from "./pages/Product/FavouriteProductList";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import CheckoutSuccess from "./components/CheckoutSuccess/CheckoutSuccess";

function App() {
  return (
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />
          <Route
            path="/dashboard/create-product"
            element={
              <PrivateRoute allowedRoles={["seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <AddProduct />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/my-favorites"
            element={
              <PrivateRoute allowedRoles={["buyer","seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <FavouriteProductList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <Layout>
                <AllProducts />
              </Layout>
            }
          />

          <Route 
            path="/checkout-success" 
            element={
                <CheckoutSuccess />
            }
          />

          <Route
            path="/dashboard/update-product/:id"
            element={
              <PrivateRoute allowedRoles={["seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <ProductEdit />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <PrivateRoute allowedRoles={["buyer","seller","admin"]}>
                <Layout>
                  <ProductsDetails />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute allowedRoles={["buyer","seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <Dashboard />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/my-products"
            element={
              <PrivateRoute allowedRoles={["seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <ProductList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/all-products"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <AdminProductList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/admin-product-update/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <UpdateProductByAdmin />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/all-users"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <UserList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/winning-products"
            element={
              <PrivateRoute allowedRoles={["buyer","seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <WinningBidList />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/profile"
            element={
              <PrivateRoute allowedRoles={["buyer","seller","admin"]}>
                <Layout>
                  <DashboardLayout>
                    <UserProfile />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/all-categories"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <Catgeorylist />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/create-category"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <CreateCategory />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/update-category/:id"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <Layout>
                  <DashboardLayout>
                    <UpdateCategory />
                  </DashboardLayout>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
