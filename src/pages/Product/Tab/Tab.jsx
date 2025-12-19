import { useState } from "react";
import Description from "./Description";
import { History } from "./History";
import MoreProducts from "./MoreProducts";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

const Tab = ({product, history, reviews, relatedProducts }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-10 relative">
        <div className="flex overflow-x-auto gap-3 pb-2">
            {[
                { key: "description", label: "Description" },
                { key: "history", label: "History" },
                { key: "reviews", label: `Reviews (${reviews?.length || 0})` },
                { key: "moreProducts", label: "More Products" },
            ].map((t) => (
                <button
                    type="button"
                    key={t.key}
                    onClick={() => setActiveTab(t.key)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                        activeTab === t.key ? "bg-emerald-600 text-white shadow" : "bg-white border border-gray-200 text-gray-700"
                    }`}
                    >
                    {t.label}
                </button>
            ))}
        </div>

        <div className="mt-8">
            {activeTab === "description" && <Description {...{product}} />}

            {activeTab === "history" && <History {...{history}} /> }

            {activeTab === "reviews" && (
                <div className="space-y-6">
                    <ReviewForm />
                    <ReviewList {...{reviews }}/>
                </div>
            )}

            {activeTab === "moreProducts" && <MoreProducts {...{relatedProducts}}/> }
        </div>
  </div>
  )
}

export default Tab;