import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavouriteProducts, removeFavouriteProduct } from "../../redux/features/authSlice";
import { ProfileCard, Title } from "../../components/common/Design";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

const FavouriteProductList = () => {
  const dispatch = useDispatch();

  const { favoriteProducts = [], isLoading } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getFavouriteProducts());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  if (favoriteProducts?.length === 0) {
    return <div className="flex justify-center items-center h-auto w-auto">
      <h1 className="text-2xl text-gray-700">No products found.</h1>
    </div>
  }

  const handleRemoveFavouriteProduct = async (_id) => {
    await dispatch(removeFavouriteProduct(_id));
    toast.success("Product removed from favorites!");
  };

  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <Title level={5} className=" font-normal">
          Favourite Product Lists
        </Title>
      </div>
      <hr className="my-5" />
      <div className="relative overflow-x-auto rounded-lg">
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
              const {
                _id,
                title,
                category,
                price,
                image
              } = product;
              return (
                <tr key={`${_id}-${index}`} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-10 py-4">{index + 1}</td>
                  <td className="px-10 py-4 capitalize">{title?.length > 20 ? title?.slice(0, 20) + "..." : title}</td>
                  <td className="px-10 py-4">{category}</td>
                  <td className="px-10 py-4 capitalize">{price}</td>
                  <td className="px-10 py-4">
                    <ProfileCard>
                      <img
                        className="w-10 h-10 rounded-md"
                        src={image?.filePath}
                        alt="user-photo"
                      />
                    </ProfileCard>
                  </td>
                  <td className="py-4 flex justify-end px-8">
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
      </div>
    </section>
  );
};

export default FavouriteProductList;
