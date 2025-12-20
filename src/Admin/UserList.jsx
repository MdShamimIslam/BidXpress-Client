import { ProfileCard } from "../components/common/Design";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserByAdmin, getAllUser } from "../redux/features/authSlice";
import { useEffect } from "react";
import { formatDate } from "../utils/formateDate";
import DashboardTitle from "../components/common/DashboardTitle";
import Swal from "sweetalert2";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state?.auth);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);


  const handleDeleteUser = async (id) => {
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
      await dispatch(deleteUserByAdmin(id));
      await dispatch(getAllUser());
    }
  };
  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <DashboardTitle title="User Lists" />
      </div>
      <hr className="my-5" />
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                S.N
              </th>
              <th scope="col" className="px-6 py-5">
                Photo
              </th>
              <th scope="col" className="px-6 py-5">
                Username
              </th>
              <th scope="col" className="px-6 py-5">
                Email
              </th>
              <th scope="col" className="px-6 py-5">
                Role
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
            {users?.map((user, index) => (
                <tr
                  key={user?._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">
                    <ProfileCard>
                      <img
                        className="w-10 h-10 rounded-md"
                        src={user?.photo}
                        alt="user-photo"
                      />
                    </ProfileCard>
                  </td>
                  <td className="px-6 py-4 capitalize">{user?.name}</td>
                  <td className="px-6 py-4">{user?.email}</td>
                  <td className="px-6 py-4 capitalize">{user?.role}</td>
                  <td className="px-6 py-4">{formatDate(user?.createdAt)}</td>
                  {
                    user?.role !== "admin" && <td className="py-4 flex justify-end px-8 mt-4 lg:mt-2">
                    <button
                      onClick={() => handleDeleteUser(user?._id)}
                      className="font-medium text-red-500"
                    >
                      <MdOutlineDeleteOutline size={25} />
                    </button>
                  </td>
                  }
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserList;
