import { useState } from "react";
import { FaXmark, FaCloudArrowUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UploadresumeModal = ({ isOpen, onClose, children }) => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Upload your resume");
  const [titleError, setTitleError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Upload Function

  const handleUpload = () => {
    let isValid = true;
    if (title.trim() === "") {
      setTitleError("Please enter resume title");
      isValid = false;
    } else {
      setTitleError("");
    }
    if (!file) {
      setError("Please upload your resume");
      isValid = false;
    } else {
      setError("");
    }
    if (!isValid) return;

    // Store Data from form

    const resumeData = {
      id: Date.now(),
      title,
      file,
    };

    onClose();
    navigate(`/app/builder/res1`);
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2.5 z-10 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
          >
            <FaXmark size={20} />
          </button>
          <div className="relative bg-slate-50 border-0 w-4xl max-w-sm p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Upload Existing Resume</h2>
            {/* Resume Title */}
            <input
              type="text"
              placeholder="Enter resume title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError("");
              }}
              className={`w-full px-4 py-2 mb-4 border
             focus:border-green-600 focus:border-2 
             rounded-md ring-green-600 outline-0
             ${titleError ? "border-red-500 border-2" : "border-gray-300"} `}
            />
            {titleError && (
              <p className="relative -mt-3 p-2 w-100 text-red-500">
                {titleError}
              </p>
            )}

            {/* Upload Text */}
            <p className="text-xl font-medium mt-4 mb-4">Select resume file</p>

            {/* Hidden File Input */}
            <input
              type="file"
              id="resumeUpload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const selectedFile = e.target.files[0];

                if (selectedFile) {
                  setFile(selectedFile);
                  setError("");
                }
              }}
            />

            {/* Upload Box */}
            <label
              htmlFor="resumeUpload"
              className={`border-2 mb-4 border-dashed rounded-2xl h-50 flex flex-col items-center justify-center cursor-pointer ${
                error ? "border-red-400" : "border-green-300"
              }`}
            >
              <FaCloudArrowUp className="text-7xl text-green-600 mb-4" />

              <p className="text-2xl text-green-700 font-semibold text-center ">
                {file ? file.name : "Upload resume"}
              </p>
            </label>

            {/* File Error */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <button
              onClick={handleUpload}
              className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Upload Existing Resume
            </button>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default UploadresumeModal;
