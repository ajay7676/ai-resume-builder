import { useDispatch, useSelector } from "react-redux";
import ButtonForm from "./ButtonForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updatePersonalSummary } from "../../../api/resumeApi";
import { updateCurrentResume } from "../../../features/resume/resumeSlice";

const ProfessionalSummary = () => {
  const { resumeId } = useParams();
    const dispatch = useDispatch();
    const currentResume = useSelector((state) => state?.resume?.selectedCurrentResume);
    const [summary, setSummary] = useState("");
    useEffect(() => {
        if(currentResume?.summary){
            setSummary(currentResume.summary.content)
        }

    } , [currentResume]);


    const handleSave = async () => {
           try {
             const  data =  await updatePersonalSummary(currentResume._id, {content : summary});
             dispatch(updateCurrentResume(data.resume));
             alert("Saved Successfully");

            
         } catch (error) {

            console.log(error.message)
            
         }
    }
 
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Professional Summary
            </h3>
            <p className="text-sm text-gray-500">
              Add summary for your resume here
            </p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
            AI Enhance
          </button>
        </div>
        <div className="mt-6">
          <textarea
            rows={7}
            className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
            placeholder="Write a compelling professional summary that highlights your key strengths and career objectives..."
            defaultValue={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <p className="text-xs text-gray-500 max-w-4/5 mx-auto text-center">
            Tip: Keep it concise (3-4 sentences) and focus on your most relevant
            achievements and skills.
          </p>
        </div>
      </div>
      <ButtonForm handleSave={handleSave}  />
    </>
  );
};

export default ProfessionalSummary;
