import { IoIosSearch } from "react-icons/io";

const SearchBox = ({ setSearchTitle }) => {

  const debounceHandler = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const doSearch = (v) => {
    setSearchTitle(v);
  }

  const handleSearch  = debounceHandler(doSearch, 750);

    return (
      <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/4 lg:w-1/2 mx-auto">
        <div className="relative">
          {/* Icon */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <IoIosSearch size={22} className="text-gray-500" />
          </div>
  
          <input
            type="search"
            onChange={(e) => handleSearch(e.target.value)}
            className="block w-full pl-12 pr-32 py-4 rounded-full bg-white text-gray-700 placeholder-gray-400 border border-gray-200 focus:outline-none"
            placeholder="Search by title..."
          />
  
          {/* <button
            type="button"
            className=" absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 rounded-lg 
              bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white font-medium transition"
          >
            Search
          </button> */}
        </div>
      </form>
    );
};
  

  export default SearchBox;