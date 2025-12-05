const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];

    // Always show first page
    if (currentPage > 2) {
      pages.push(1);
    }

    // Show left ellipsis
    if (currentPage > 3) {
      pages.push("left-ellipsis");
    }

    // Pages around current
    const start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Show right ellipsis
    if (currentPage < totalPages - 2) {
      pages.push("right-ellipsis");
    }

    // Always show last page
    if (currentPage < totalPages - 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex justify-center items-center mt-12 flex-wrap gap-2">

      {/* Prev Button */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md text-sm ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page, index) =>
        page === "left-ellipsis" || page === "right-ellipsis" ? (
          <span key={index} className="px-3 py-2 text-gray-500">...</span>
        ) : (
          <button
          key={`${page}-${index}`}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-md text-sm ${
              page === currentPage
                ? "bg-[#355F2E] text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {page}
          </button>
        )
      )}
      {/* Next Button */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-sm ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
