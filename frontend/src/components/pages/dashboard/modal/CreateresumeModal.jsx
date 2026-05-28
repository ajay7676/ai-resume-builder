import { FaXmark } from "react-icons/fa6";


const CreateresumeModal = ({ isOpen, onClose, children }) => {
     if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
      <div className="relative">
        
        <button
          onClick={onClose}
          className="absolute top-2.5 z-10 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        >
          <FaXmark  size={20}/>
        </button>

        {children}
      </div>
    </div>
  )
}

export default CreateresumeModal