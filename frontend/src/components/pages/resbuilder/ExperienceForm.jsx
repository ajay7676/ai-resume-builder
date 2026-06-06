import { useEffect, useState } from "react";
import ButtonForm from "./ButtonForm";
import { FaPlus } from "react-icons/fa6";
import ExperinenceInput from "./ExperinenceInput";
import { updatePersonalExperience } from "../../../api/resumeApi";
import { useSelector } from "react-redux";

const ExperienceForm = () => {
  const currentResume =  useSelector((state) => state?.resume?.selectedCurrentResume);
  const [experiences, setExperiences] = useState([
    
  ]);

  const addExperience = () => {
    setExperiences((prev) => [
      ...prev,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

   const handleSave = async() => {
        try {
             await  updatePersonalExperience(currentResume._id, {experiences: experiences})
           
          
        } catch (error) {
            console.log(error.message)
          
        }
   }
    useEffect(() => {
       if(currentResume?.experiences?.length){
          setExperiences(currentResume.experiences)
       }

    } , [currentResume])
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                Professional Experience
              </h3>
              <p className="text-sm text-gray-500">Add your job experience</p>
            </div>
            <button
              onClick={addExperience}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              <FaPlus />
              Add Experience
            </button>
          </div>
          {experiences.length > 0 ? (
            <ExperinenceInput
              experiences={experiences}
              setExperiences={setExperiences}
            />
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>No work experience added yet.</p>
              <p className="text-sm">Click "Add Experience" to get started.</p>
            </div>
          )}
        </div>
      </div>
      <ButtonForm handleSave={handleSave} />
    </>
  );
};

export default ExperienceForm;
