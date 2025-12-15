import { formatDate } from "../../utils/formateDate";

export const AuctionHistory = ({ history }) => {
  return (
    <div className="bg-white shadow-sm rounded-2xl border border-gray-100 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          Auction History
        </h3>
        <div className="text-sm text-gray-500">
          Total bids:{" "}
          <span className="font-medium text-gray-700">
            {history?.length || 0}
          </span>
        </div>
      </div>

      {history?.length === 0 ? (
        <div className="text-center py-8 text-gray-600">
          No bidding record found.
        </div>
      ) : (
        <>
          {/* ================= DESKTOP / TABLET TABLE ================= */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-50 text-xs text-gray-600 uppercase">
                <tr>
                  <th className="px-4 py-3">Bidder</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 text-right">Bid</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, i) => (
                  <tr
                    key={item?._id || i}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-emerald-50`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={item?.user?.photo}
                          alt={item?.user?.name}
                          className="w-9 h-9 rounded-lg object-cover border"
                        />
                        <span className="font-medium text-gray-800">
                          {item?.user?.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {item?.user?.email}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {item?.createdAt
                        ? formatDate(item?.createdAt)
                        : "N/A"}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-emerald-600">
                      ${item?.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================= MOBILE CARD VIEW ================= */}
          <div className="space-y-4 sm:hidden">
            {history.map((item, i) => (
              <div
                key={item?._id || i}
                className="border rounded-xl p-4 shadow-sm bg-gray-50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item?.user?.photo}
                    alt={item?.user?.name}
                    className="w-10 h-10 rounded-lg object-cover border"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {item?.user?.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item?.user?.email}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-gray-500">Date</span>
                  <span className="text-gray-800 text-right">
                    {item?.createdAt
                      ? formatDate(item?.createdAt)
                      : "N/A"}
                  </span>

                  <span className="text-gray-500">Bid</span>
                  <span className="text-emerald-600 font-semibold text-right">
                    ${item?.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
