import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/features/productSlice";
import {
  Container,
  Heading,
  PrimaryButton,
} from "../../components/common/Design";
import ProductCard from "../../screens/Hero/ProductCard";
import { IoIosSearch } from "react-icons/io";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector(
    (state) => state?.product
  );
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product?.category === selectedCategory);

  return (
    <>
      <section className="product-home my-24 md:my-36">
        <Container>
          <SearchBox />

          <Heading
            title="Discover Our Entire Collection"
            subtitle="Browse through a world of exciting products, from unique finds to everyday essentials. There's something here for everyone!"
          />

          <CategoryByFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
                {filteredProducts?.map((item, index) => (
                  <ProductCard item={item} key={index + 1} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
};

export default AllProducts;

const SearchBox = () => {
  return (
    <>
      <form className="mt-6 mb-12 w-1/2 mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-800 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
            <IoIosSearch color="black" size={25} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block shadow-md w-full p-6 ps-16  text-gray-800 rounded-full bg-gray-50 outline-none"
            placeholder="Search product by title..."
          />
          <PrimaryButton className="absolute end-2.5 bottom-2">
            Search
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

const CategoryByFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "all",
    "watches",
    "electronics",
    "sports",
    "real estate",
    "vehicle",
    "furniture",
    "jewellery",
  ];

  return (
    <div className="flex items-center gap-4 my-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-6 py-2 rounded-full text-sm font-medium shadow-md capitalize transition-all duration-300 ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-800 hover:bg-green hover:text-white"
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-8 space-x-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-md ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className={`px-4 py-2 rounded-md ${
          currentPage === totalPages || totalPages === 0
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        Next
      </button>
    </div>
  );
};






