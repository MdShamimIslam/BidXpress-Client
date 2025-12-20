import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavouriteProducts, removeFavouriteProduct } from "../../redux/features/authSlice";
import { ProfileCard } from "../../components/common/Design";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import DashboardTitle from "../../components/common/DashboardTitle";
import Swal from 'sweetalert2'


const FavouriteProductList = () => {
  const dispatch = useDispatch();
  const { favoriteProducts = [], isLoading } = useSelector( (state) => state.auth );

  useEffect(() => {
    dispatch(getFavouriteProducts());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  const handleRemoveFavouriteProduct = async (_id) => {
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
      dispatch(removeFavouriteProduct(_id));
      toast.success("Product removed from favorites!");
    }
  };
  

  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <DashboardTitle title="Favourite Product Lists" />
      </div>
      <hr className="my-5" />
      {favoriteProducts?.length === 0 ? <>
          <h1 className="mt-12 mb-8 text-lg md:text-xl text-gray-700 text-center">No products found.</h1>
      </> :<div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-10 py-5">
                S.N
              </th>
              <th scope="col" className="px-10 py-5">
                Title
              </th>
              <th scope="col" className="px-10 py-5">
                Category
              </th>
              <th scope="col" className="px-10 py-5">
                Price
              </th>
              <th scope="col" className="px-10 py-5">
                Photo
              </th>
              <th scope="col" className="px-6 py-3 flex justify-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {favoriteProducts?.map((product, index) => {
              const { _id, title, category, price, image } = product;
              return (
                <tr key={`${_id}-${index}`} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-10 py-4">{index + 1}</td>
                  <td className="px-10 py-4 capitalize">{title?.length > 20 ? title?.slice(0, 20) + "..." : title}</td>
                  <td className="px-10 py-4">{category}</td>
                  <td className="px-10 py-4 capitalize">${price}</td>
                  <td className="px-10 py-4">
                    <ProfileCard>
                      <img
                        className="w-10 h-10 rounded-md"
                        src={image?.filePath}
                        alt="user-photo"
                      />
                    </ProfileCard>
                  </td>
                  <td className="pt-8 lg:pt-6 flex justify-end px-8">
                    <button
                      onClick={() => handleRemoveFavouriteProduct(_id)}
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
      </div> }
      
    </section>
  );
};

export default FavouriteProductList;
