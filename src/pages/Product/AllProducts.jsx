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
  const { products, isLoading, totalPages } = useSelector(
    (state) => state?.product
  );

  const [selectedCategory, setSelectedCategory] = useState("all");
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

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products?.filter((product) => product?.category === selectedCategory);

  return (
    <>
      <section className="product-home mt-24 mb-20 md:mt-28 lg:mt-36">
        <Container>
          <SearchBox
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
          />

          <Heading
            title="Discover Our Entire Collection"
            subtitle="Browse through a world of exciting products, from unique finds to everyday essentials. There's something here for everyone!"
          />

          <CategoryByFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {isLoading ? (
            <p className="text-center text-green text-xl font-semibold mt-24">
              Loading...
            </p>
          ) : filteredProducts?.length === 0 ? (
            <p className="text-center text-gray-600 text-xl font-semibold mt-24">
              No products found with this title.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8">
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

const SearchBox = ({ searchTitle, setSearchTitle }) => {
  return (
    <form className="mt-6 mb-12 w-full lg:w-1/2 mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
          <IoIosSearch color="black" size={25} />
        </div>
        <input
          type="search"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          className="block shadow-md w-full p-6 ps-16 text-gray-800 rounded-full bg-gray-50 outline-none"
          placeholder="Search product by title..."
        />
        <button
          type="submit"
          className={
            "absolute end-2.5 bottom-4 md:bottom-2 bg-primary text-white hover:bg-green font-medium rounded-full md:text-lg px-4 py-2 md:px-16 md:py-3 transition ease-in-out"
          }
        >
          Search
        </button>
      </div>
    </form>
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
    <div className="flex flex-wrap justify-center md:justify-start gap-4 my-8">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium shadow-md capitalize transition-all duration-300 ${
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

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-12 space-x-2">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
      >
        Prev
      </button>

      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-4 py-2 rounded-md ${
            page === currentPage
              ? "bg-[#355F2E] text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
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
