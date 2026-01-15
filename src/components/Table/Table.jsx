import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Table = ({ products=[], isWon, isAdmin, handleDeleteProduct, handleSellProduct, sellingProductId, 
  handlePayment= () => {}, payingProductId, paymentLoading }) => {

  return (
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5"> Title </th>
              <th scope="col" className="px-6 py-3"> Commission </th>
              <th scope="col" className="px-6 py-3"> Price </th>
              <th scope="col" className="px-6 py-3"> Current Bidding </th>
              <th scope="col" className="px-6 py-3"> Image </th>
              { isWon &&  <th scope="col" className="px-6 py-3"> Payment Status </th> }
              {!isWon && (
                <>
                  <th scope="col" className="px-6 py-3"> Verify </th>
                  {!isAdmin && (
                    <th scope="col" className="px-6 py-3"> Sale Status </th>
                  )}
                  <th scope="col" className="px-6 py-3"> Action </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => {
              const { _id, title, commission, price, image, biddingPrice, isverify, saleStatus  } = product || {};
              
              return (
                <tr key={_id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{title?.length > 20 ? title?.slice(0, 20) + "..." : title}</td>
                  <td className="px-6 py-4">{commission}%</td>
                  <td className="px-6 py-4">${price}</td>
                  <td className="px-6 py-4">${biddingPrice}</td>
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
                          <td className="px-6 py-4">
                              {saleStatus === "completed" ? (
                                <button className="bg-slate-500 text-white py-1 px-3 rounded-lg cursor-not-allowed">Sold Out</button>
                              ) : saleStatus === "pending" ? (
                                <button className="bg-yellow-600 text-white py-1 px-3 rounded-lg cursor-not-allowed">Payment Pending</button>
                              ) : (
                                <button
                                  onClick={() => handleSellProduct(_id)}
                                  disabled={!isverify || sellingProductId === _id}
                                  className={`px-4 py-1 rounded-lg font-semibold ${
                                    isverify
                                      ? "bg-green text-white"
                                      : "bg-gray-300 text-black cursor-not-allowed"
                                  }`}
                                > 
                                 <div className="flex justify-center items-center">
                                   {sellingProductId === _id && <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>}
                                    <p>Sell</p>
                                  </div>
                                </button>
                              )}
                          </td>
                      )}
                      <td className="px-6 py-4 text-center flex items-center gap-3 mt-4 lg:mt-2">
                        {isAdmin ? (
                          <NavLink
                            to={`/dashboard/admin-product-update/${_id}`}
                            type="button"
                            className="font-medium text-green"
                          >
                            <CiEdit size={25} />
                          </NavLink>
                        ) : (
                          <NavLink
                            to={`/dashboard/update-product/${_id}`}
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
                    <td className="px-6 py-4">
                      {saleStatus === "completed" ? (
                        <span className="inline-block bg-[#729918] text-white px-8 py-1 rounded-lg font-semibold">
                          Paid
                        </span>
                      ) : saleStatus === "pending" ? (
                        <button 
                          className="inline-block bg-[#31b162] text-white px-3 py-1 rounded-lg font-semibold"
                          onClick={() => handlePayment(_id)}
                          disabled={!handlePayment}
                        >
                          <div className="flex justify-center items-center">
                            { paymentLoading && (payingProductId === _id) && 
                              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2">
                              </div>
                            }
                            <p>Pay Now</p>
                          </div>
                        </button>
                      ) : (
                        <span className="text-white inline-block bg-[#9c9310] px-3 py-1 rounded-lg font-semibold">Not ready</span>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  );
};

export default Table;
