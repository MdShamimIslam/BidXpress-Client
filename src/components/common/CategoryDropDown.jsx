import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getAllCategory } from "../../redux/features/categorySlice";

const CategoryDropDown = ( props ) => {
  const dispatch = useDispatch();

  const { categories, isLoading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const allCategory = categories?.map((category) => {
    return { value: category?._id, label: category?.title };
  });

  const handleChange = (selectOption) => {
    props.onChange(selectOption);
  };

  return <>{isLoading ? <p>Loading...</p> : <Select 
    id="category"
    options={allCategory}
    onChange={handleChange}
    value={props?.value}
     />}
  </>;
};

export default CategoryDropDown;
