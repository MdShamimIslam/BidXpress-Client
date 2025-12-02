import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/common/Design";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getAllProduct } from "../../redux/features/productSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
       <section className="py-12 md:py-16 bg-gradient-to-b from-stone-50 to-white">
        <Container>
          <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Discover Featured <span className="text-[#4da741]">Auctions</span>
            </h2>
            <p className="text-gray-600">
              Exclusive picks with bids closing soon — don’t miss out
            </p>
          </div>

            <Link to="/products" className="hidden md:block text-emerald-600 hover:text-emerald-700 font-semibold transition">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
              {products?.slice(0, 8)?.map((item, index) => (
                <ProductCard item={item} key={index + 1} />
              ))}
            </div>

          <div className="md:hidden mt-8 text-center">
            <Link to="/products" className="text-emerald-600 hover:text-emerald-700 font-semibold transition">
              View All Auctions →
            </Link>
          </div>
        </Container>
    </section> 
  );
};

export default ProductList;
