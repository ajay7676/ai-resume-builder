import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";

const ResumePreview = () => {
const { resumeId } = useParams();
 const allResumes = useSelector((state) => state?.resume?.resumes);
 

   const currentResume  = allResumes.find((resume) =>  resume._id === resumeId);
 return (
    <div className="lg:col-span-7 max-lg:mt-6">
  <div className="relative w-full">
    <div className="absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2">
      <button className="flex items-center p-2 px-4 gap-2 text-xs bg-linear-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors">
        Private
      </button>
      <button className="flex items-center gap-2 px-6 py-2 text-xs bg-linear-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors">
        Download
      </button>
    </div>
  </div>
  <div className="w-full bg-gray-100">
    <div
      id="resume-preview"
      className="border border-gray-200 print:shadow-none print:border-none "
    >
      <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed">
        <header
          className="text-center mb-8 pb-6 border-b-2"
          style={{ borderColor: "rgb(59, 130, 246)" }}
        >
           
          <h1
            className="text-3xl font-bold mb-2"
             style={{color: "rgb(59, 130, 246)"}}
          >
            {
            currentResume.personalInfo ? currentResume.personalInfo.fullName:"Your Name" }
          </h1>
          {
            currentResume.personalInfo &&  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>7654246723</span>
            </div>
            <div className="flex items-center gap-1">
             
              <span>noida</span>
            </div>
            <div className="flex items-center gap-1">
             
              <span className="break-all">https://www.linkedin.com/feed/</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="break-all">https://ajaychauhan.dev/</span>
            </div>
          </div>
          }
         
        </header>
      </div>
    </div>

  </div>
</div>
    
  )
}

export default ResumePreview