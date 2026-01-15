
const Loader = () => {
    return (
      <div className="min-h-[40vh] mt-16 flex justify-center items-center">
        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-green mr-2"></div>
        <p className="text-gray-600 font-semibold">Loading...</p>
     </div>
      );
}

export default Loader;