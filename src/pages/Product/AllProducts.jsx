import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/features/productSlice";
import { Container } from "../../components/common/Design";
import ProductCard from "../../screens/Hero/ProductCard";
import { Helmet } from 'react-helmet-async';
import SearchBox from "./SearchBox";
import CategoryByFilter from "./CategoryByFilter";
import Pagination from "./Pagination";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading, totalPages } = useSelector((state) => state?.product);
  const [selectedCategory, setSelectedCategory] = useState({title: "all"});
  const [searchTitle, setSearchTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(8);

  useEffect(() => {
    const params = {
      ...(searchTitle && { title: searchTitle }),
      ...(currentPage && limit && { page: currentPage, limit }),
    };
    dispatch(getAllProduct(params));
  }, [dispatch, currentPage, limit, searchTitle]);

  const filteredProducts = selectedCategory?.title === "all" ? products : products?.filter((product) => product?.category === selectedCategory?.title);

  return (
    <>
    <Helmet>
    <title>BidXpress | Products</title>
    </Helmet>
      <section className="mt-28 md:mt-32 lg:mt-36 mb-16 lg:mb-20">
        <Container>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Discover Our Entire <span className="text-[#2da515]">Collection</span> 
            </h2>
            <p className="text-gray-500 md:text-lg mt-2 ">
              Browse through exclusive items, trending products, and unique finds crafted for every taste.
            </p>
          </div>

          <SearchBox
            setSearchTitle={setSearchTitle}
          />

          <CategoryByFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {isLoading ? (
            <p className="text-center text-primary text-xl font-semibold mt-24">Loading...</p>
          ) : filteredProducts?.length === 0 ? (
            <p className="text-center text-gray-600 font-semibold my-16">
              No product found.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 my-10">
                {filteredProducts?.map((item, index) => (
                  <ProductCard item={item} key={index + 1} />
                ))}
              </div>

              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default AllProducts;






