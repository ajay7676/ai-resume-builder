import React from 'react'

const CreateresumeModal = ({ isOpen, onClose, children }) => {
     if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-80 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
        >
          X
        </button>

        {children}
      </div>
    </div>
  )
}

export default CreateresumeModal