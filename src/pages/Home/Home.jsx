import StatsCounter from "../../components/StatsCounter/StatsCounter ";
import CategorySidebar from "../../screens/Hero/CategorySidebar";
import Hero from "../../screens/Hero/Hero";
import Process from "../../screens/Hero/Process";
import ProductList from "../../screens/Hero/ProductList";
import TopCollection from "../../screens/Hero/TopCollection";
import TopSeller from "../../screens/Hero/TopSeller";
import Trust from "../../screens/Hero/Trust";

const Home = () => {
  
  return (
    <>
      <Hero />
      <StatsCounter />
      <CategorySidebar />
      <ProductList />
      <TopSeller />
      <Process />
      <Trust />
      <TopCollection />
    </>
  );
};

export default Home;
