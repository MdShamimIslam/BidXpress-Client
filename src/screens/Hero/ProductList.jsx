import { useDispatch, useSelector } from "react-redux";
import { Container, Heading } from "../../components/common/Design";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import { getAllProduct } from "../../redux/features/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);
  return (
    <>
      <section className="product-home mt-16 md:mt-20">
        <Container>
          <Heading
            title="Featured Products"
            subtitle="Discover the most popular and exciting products from our collection. Find what you love and start bidding today!"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
            {products?.slice(0, 12)?.map((item, index) => (
              <ProductCard item={item} key={index + 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductList;
