import Categories from "../../screens/Hero/Categories";
import Hero from "../../screens/Hero/Hero";
import Process from "../../screens/Hero/Process";
import ProductList from "../../screens/Hero/ProductList";
import Stats from "../../screens/Hero/Stats";
import TopCollection from "../../screens/Hero/TopCollection";
import TopSeller from "../../screens/Hero/TopSeller";
import Trust from "../../screens/Hero/Trust";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
    <title>BidXpress | Home</title>
    </Helmet>
      <Hero />
      <Stats/>
      <Categories/>
      <ProductList />
      <TopSeller />
      <Process />
      <Trust />
      <TopCollection />
      
    </>
  );
};

export default Home;
