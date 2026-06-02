import React from "react";
import ResumeSidebar from "./ResumeSidebar";
import ResumePreview from "./ResumePreview";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";


const ResumeBuilder = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6">
         <Link to="/app" className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all">
          <FaArrowLeft className="mr-1" />
          Back to Dashboard
         </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <ResumeSidebar />
          <ResumePreview />
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
