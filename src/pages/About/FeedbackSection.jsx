import { useState } from "react";
import AddFeedback from "./AddFeedback"; 
import { AiOutlineClose } from "react-icons/ai";

const FeedbackSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="py-16 md:py-20 mb-[-50px] bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          We're Always <span className="text-[#2da515]">Listening</span>
        </h2>
        <p className="md:text-lg text-gray-600 mb-8">
          Your feedback drives our innovation. We're constantly evolving to meet your needs and exceed your
          expectations.
        </p>
        <button
          onClick={openModal}
          className="bg-[#216118] hover:bg-emerald-900 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          Share Your Feedback
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-lg relative p-6 m-4 md:m-0">
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Feedback Form */}
            <AddFeedback closeModal={closeModal} />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
