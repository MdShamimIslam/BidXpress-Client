import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/features/categorySlice";

const CategoryByFilter = ({ selectedCategory, setSelectedCategory }) => {
  const {categories=[]} = useSelector((state) => state?.category);
  const dispatch = useDispatch();

 useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const allRelatedCategory = { _id: "6751d961axxx5b07dd6e4686", title: "all" };

  const finalCategories = [allRelatedCategory, ...categories];



  return (
    <div className="relative mt-10 mb-6">
      <div className="overflow-x-auto no-scrollbar px-10">
        <div  className="flex gap-3 md:gap-4 w-max mx-auto py-2 scroll-smooth">
          {finalCategories?.map((category) => {
            const { _id, title } = category || {};
            return (
                <button
                key={_id}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 md:px-7 py-2 rounded-full text-sm font-medium capitalize border transition-all duration-300 whitespace-nowrap
                  ${
                    selectedCategory?.title === category?.title
                      ? "bg-gradient-to-r from-[#6fd361] to-[#1b3618] text-white"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                  }
                `}
              >
                {title}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryByFilter;
