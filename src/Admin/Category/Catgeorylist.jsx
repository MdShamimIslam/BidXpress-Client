import { ProfileCard } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCategory,getAllCategory } from "../../redux/features/categorySlice";
import { formatDate } from "../../utils/formateDate";
import DashboardTitle from "../../components/common/DashboardTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/common/Loader";

const Catgeorylist = () => {
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);


  const handleCategoryDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      dispatch(deleteCategory(_id));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Helmet>
        <title>BidXpress | Category List</title>
      </Helmet>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="flex justify-between items-center">
          <DashboardTitle title="Category Lists" />
          <NavLink to="/dashboard/create-category">
          <button className="flex items-center gap-1 rounded-lg transition-transform hover:scale-105 bg-gradient-to-r from-[#244420] to-[#3b8532] text-white px-4 py-2 font-semibold">
              <AiOutlinePlus size={20} />
              <span>Create Category</span>
            </button>
          </NavLink>
        </div>
        <hr className="my-5" />
        <div className="relative overflow-x-auto rounded-lg">
          {categories?.length > 0 ? (
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-5">
                    S.N
                  </th>
                  <th scope="col" className="px-20 py-5">
                    User
                  </th>
                  <th scope="col" className="px-6 py-5">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 flex justify-end">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((category, index) => {
                  const { _id, title, user, createdAt } = category;
                  const { name, photo, email } = user || {};
                  return (
                    <tr
                      key={_id}
                      className="bg-white border-b hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center px-6 text-gray-900 whitespace-nowrap">
                          <div>
                            <ProfileCard>
                              <img className="w-10 h-10 rounded-md" src={photo} alt="user-image" />
                            </ProfileCard>
                          </div>
                          <div className="pl-3">
                            <div className="text-base font-semibold capitalize">
                              {name}
                            </div>
                            <div className="font-normal text-gray-500">
                              {email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{title}</td>
                      <td className="px-6 py-4">{formatDate(createdAt)}</td>
                      <td className="px-6 py-4 text-center flex items-center justify-end gap-3 mt-4 lg:mt-2">
                        <NavLink
                          to={`/dashboard/update-category/${_id}`}
                          className="font-medium text-green"
                        >
                          <CiEdit size={25} />
                        </NavLink>
                        <button
                          onClick={() => handleCategoryDelete(_id)}
                          className="font-medium text-red-500"
                        >
                          <MdOutlineDeleteOutline size={25} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h3 className="text-xl text-green">You haven't added any categories yet.</h3>
          )}
        </div>
      </section>
    </>
  );
};

export default Catgeorylist;
