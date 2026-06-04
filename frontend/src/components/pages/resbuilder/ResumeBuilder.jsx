import ResumeSidebar from "./ResumeSidebar";
import ResumePreview from "./ResumePreview";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect } from "react";
import { getResumeById } from "../../../api/resumeApi";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentResume } from "../../../features/resume/resumeSlice";



const ResumeBuilder = () => {
    const {resumeId} = useParams();

    const userId = useSelector((state) => state?.authresume?.user?._id);
    const dispatch = useDispatch();
    const fetchResume = async (resumeId) => {

      try {
          const data = await getResumeById(resumeId , userId);
           dispatch(setCurrentResume(data.resume))
        
      } catch (error) {
         console.log(error)
        
      }

    }

   useEffect(() =>{
    fetchResume(resumeId);

   } , [resumeId])
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
          {/* <ResumePreview /> */}
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
