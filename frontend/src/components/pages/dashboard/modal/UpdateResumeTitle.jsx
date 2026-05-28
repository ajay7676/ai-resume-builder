import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const UpdateResumeTitle = ({isOpen,onClose,resumeId,allResumes,setAllResumes}) => {
    const [title, setTitle] = useState("");
  const [error, setError] = useState("");
   console.log(resumeId);
   console.log(allResumes);
  const handleSubmit = () => {

  }

    if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-112.5 rounded-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 text-xl"
        >
          <FaXmark />
        </button>

         <h2 className="text-xl font-bold mb-4">Update Resume Title</h2>
          <input
            placeholder="Enter resume title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 mb-4 border
             focus:border-green-600 focus:border-2 
             rounded-md ring-green-600 outline-0
             ${error ? "border-red-500 border-2" : "border-gray-300"} `}
          />
          {error && <p className="relative -mt-3 p-2 w-100 text-red-500">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Update 
          </button>
      </div>
    </div>
  );
};

export default UpdateResumeTitle;
