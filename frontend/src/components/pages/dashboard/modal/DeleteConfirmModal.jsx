import { FaXmark } from "react-icons/fa6";

const DeleteConfirmModal = ({isOpen,onClose,allResumes,setAllResumes,selectedResumeId}) => {

    const handleDeleteResume  = () => {
        const updatedResumeList = allResumes.filter((resume) => resume._id !== selectedResumeId);
        setAllResumes(updatedResumeList);
        onClose();

    }
    if(!isOpen) return null;
  return (
     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-100 rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 text-xl"
        >
          <FaXmark />
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Delete Resume
        </h2>
        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this resume?
        </p>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleDeleteResume }
            className="flex-1 bg-red-600 text-white py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmModal