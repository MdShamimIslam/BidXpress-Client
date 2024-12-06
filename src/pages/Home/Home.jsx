
import CategorySidebar from "../../screens/Hero/CategorySidebar";
import Hero from "../../screens/Hero/Hero";
import Process from "../../screens/Hero/Process";
import ProductList from "../../screens/Hero/ProductList";
import TopCollection from "../../screens/Hero/TopCollection";
import TopSeller from "../../screens/Hero/TopSeller";
import Trust from "../../screens/Hero/Trust";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProduct } from "../../redux/features/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const {products } =  useSelector(state => state.product);

  useEffect(() => {
      dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <Hero/>
      <CategorySidebar/>
      <ProductList products={products}/>
      <TopSeller/>
      <Process/>
      <Trust/>
      <TopCollection/>
    </>
  )
}

export default Home;