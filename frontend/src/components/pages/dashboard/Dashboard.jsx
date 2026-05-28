import { useEffect, useState } from "react";
import {
  FaPlus,
  FaCloudArrowUp,
  FaPenToSquare,
  FaPen,
  FaTrashCan,
} from "react-icons/fa6";
import { dummyResumeData } from "../../../assets/assets";
import CreateresumeModal from "./modal/CreateresumeModal";
import { useNavigate } from "react-router-dom";
import UploadresumeModal from "./modal/UploadresumeModal";
import UpdateResumeTitle from './modal/UpdateResumeTitle'

const Dashboard = () => {
  const colors = ["#9333ea", "#d977706", "#dc2626", "#0284c7", "#16a34a"];
  const [allResumes, setAllResumes] = useState([]);
  const [isCreateResume, setIsCreateResume] = useState(false);
  const [isuploadResume, setIsUploadResume] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const [isUpateResumeTitle, setIsUpateResumeTitle] = useState(false)
   const [selectedResumeId, setSelectedResumeId] =
    useState(null);

  const navigate = useNavigate();

  const loadAllResumes = async () => {
    setAllResumes(dummyResumeData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      setError("Please enter resume title");
      return;
    }
    setError("");
    setIsCreateResume(false);
    setTitle("");
    navigate(`/app/builder/res1`);
  };
  useEffect(() => {
    loadAllResumes();
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden">
          Wlecome , Joe Doe
        </p>
        <div className="flex gap-4">
          <button className=" w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaPlus
              onClick={() => setIsCreateResume(true)}
              size={14}
              className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500  text-white rounded-full"
            />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Create Resume
            </p>
          </button>
          <button className=" w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-indigo-500 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <FaCloudArrowUp
            onClick={() => setIsUploadResume(true)}
              size={14}
              className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500  text-white rounded-full"
            />
            <p className="text-sm group-hover:text-indigo-600 transition-all duration-300">
              Upload Existing
            </p>
          </button>
        </div>
        <hr className="border-slate-300 my-6 sm:w-87.5"></hr>
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4 ">
          {allResumes.map((resume, index) => {
            const baseColor = colors[index % colors.length];
            return (
              <button
                key={index}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{
                  background: `linear-gradient(135deg,${baseColor}10, ${baseColor}40`,
                  borderColor: baseColor + "40",
                }}
              >
                <FaPenToSquare
                  className="group-hover:scale-105 transition-all"
                  style={{ color: baseColor }}
                />
                <p
                  className="text-sm group-hover:scale-105 transition-all  px-2 text-center"
                  style={{ color: `${baseColor}90` }}
                >
                  {resume.title}
                </p>
                <p
                  className="absolute bottom-1 text-[11px] text-slate-400 group-hover:text-slate-500 transition-all duration-300 px-2 text-center"
                  style={{ color: `${baseColor}90` }}
                >
                  Updated on {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div className="absolute top-1 right-1 group-hover:flex items-center hidden">
                  <FaTrashCan
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    style={{ color: baseColor }}
                  />
                  <FaPen
                    onClick={(e) => {
                       e.stopPropagation()
                       setSelectedResumeId(resume._id)
                      setIsUpateResumeTitle(true);

                    }}
                   
                    className="size-7 p-1.5 hover:bg-white/50 rounded text-slate-700 transition-colors"
                    style={{ color: baseColor }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <CreateresumeModal
        isOpen={isCreateResume}
        onClose={() => setIsCreateResume(false)}
      >
        <div className="relative bg-slate-50 border-0  w-full max-w-sm p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
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
            Create Resume
          </button>
        </div>
      </CreateresumeModal>
      <UploadresumeModal
       isOpen={isuploadResume}
       onClose={()=> setIsUploadResume(false)}
      >

      </UploadresumeModal>
      <UpdateResumeTitle
        isOpen={isUpateResumeTitle}
        onClose={()=> setIsUpateResumeTitle(false)}
        allResumes = {allResumes}
        setAllResumes={setAllResumes}
        resumeId={selectedResumeId}
      >

      </UpdateResumeTitle>
    </>
  );
};

export default Dashboard;
