import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Table = ({
  products,
  isWon,
  isAdmin,
  handleSellProduct,
  handleDeleteProduct,
}) => {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Commission
              </th>
              <th scope="col" className="px-6 py-3">
                Original Price
              </th>
              <th scope="col" className="px-6 py-3">
                Current Bidding(USD)
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              {isWon && (
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              )}
              {!isWon && (
                <>
                  <th scope="col" className="px-6 py-3">
                    Verify
                  </th>
                  {!isAdmin && (
                    <th scope="col" className="px-6 py-3">
                      Sold
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              const {
                _id,
                title,
                commission,
                price,
                image,
                biddingPrice,
                isverify,
                isSoldout,
              } = product;
              return (
                <tr key={_id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">  {title.length > 20 ? title.slice(0, 20) + "..." : title}</td>
                  <td className="px-6 py-4">{commission}%</td>
                  <td className="px-6 py-4">{price}</td>
                  <td className="px-6 py-4">{biddingPrice}</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-10 h-10 rounded-md"
                      src={image?.filePath}
                      alt="product-image"
                    />
                  </td>
                  {!isWon && (
                    <>
                      <td className="px-6 py-4">
                        {isverify ? (
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div>{" "}
                            Yes
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                            No
                          </div>
                        )}
                      </td>

                      {!isAdmin && (
                        <>
                          <td className="px-6 py-4">
                            {isSoldout ? (
                              <button
                                disabled={isSoldout}
                                className="bg-red-500 text-white py-1 px-3 rounded-lg"
                              >
                                Sold out
                              </button>
                            ) : (
                              <button
                                onClick={() => handleSellProduct(_id)}
                                disabled={!isverify}
                                className={` px-3 py-1 rounded-lg ${
                                  isverify
                                    ? "bg-green text-white"
                                    : "bg-gray-300 text-black cursor-not-allowed"
                                }`}
                              >
                                Sell
                              </button>
                            )}
                          </td>
                        </>
                      )}
                      <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
                        <NavLink
                          to="#"
                          type="button"
                          className="font-medium text-indigo-500"
                        >
                          <TiEyeOutline size={25} />
                        </NavLink>
                        {isAdmin ? (
                          <NavLink
                            to={`/product/admin/update/${_id}`}
                            type="button"
                            className="font-medium text-green"
                          >
                            <CiEdit size={25} />
                          </NavLink>
                        ) : (
                          <NavLink
                            to={`/product/update/${_id}`}
                            type="button"
                            className="font-medium text-green"
                          >
                            <CiEdit size={25} />
                          </NavLink>
                        )}

                        <button
                          onClick={() => handleDeleteProduct(_id)}
                          className="font-medium text-red-500"
                        >
                          <MdOutlineDeleteOutline size={25} />
                        </button>
                      </td>
                    </>
                  )}
                  {isWon && (
                    <td className="px-6 py-3">
                      <button disabled className="bg-green tetx-white py-1 px-3 rounded-lg">
                        Victory
                      </button>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
