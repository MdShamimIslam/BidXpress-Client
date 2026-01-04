const Description = ({product}) => {
    const { description, price, category, height, lengthpic, width, weight, mediumused } = product || {};

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
            <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">Description</h3>
            <p className="text-gray-700 leading-7">{description}</p>

            <hr className="my-6" />

            <h3 className="mb-3 text-lg md:text-xl font-bold text-gray-800">Product Overview</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Category</span>
                        <span className="font-medium text-gray-800">{category}</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Height</span>
                        <span className="font-medium text-gray-800">{height ?? "N/A"} cm</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Length</span>
                        <span className="font-medium text-gray-800">{lengthpic ?? "N/A"} cm</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Width</span>
                        <span className="font-medium text-gray-800">{width ?? "N/A"} cm</span>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Weight</span>
                        <span className="font-medium text-gray-800">{weight ?? "N/A"} kg</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Medium Used</span>
                        <span className="font-medium text-gray-800">{mediumused || "N/A"}</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Price</span>
                        <span className="font-medium text-gray-800">${price}</span>
                    </div>
                    <div className="flex justify-between border-b py-2">
                        <span className="text-gray-600">Sold</span>
                        <span className="font-medium text-gray-800">{product?.isSoldout ? "Yes" : "No"}</span>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Description;