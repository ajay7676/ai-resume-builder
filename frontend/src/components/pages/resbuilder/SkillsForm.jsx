import { useState } from "react";
import ButtonForm from "./ButtonForm";

const SkillsForm = () => {
  const [skills, setSkills] = useState([])
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
              Skills
            </h3>
            <p className="text-sm text-gray-500">
              
              Add your technical and soft skills
            </p>
          </div>
          <div className="flex gap-2">
            <input
              placeholder="Enter a skill (e.g., JavaScript, Project Management)"
              className="flex-1 px-3 py-2 text-sm"
              type="text"
              value={skills}
              onChange={(e)  => setSkills(e.target.value)}
            />
            <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              Add
            </button>
          </div>
          <div className="text-center py-6 text-gray-500">
            <p>No skills added yet.</p>
            <p className="text-sm">Add your technical and soft skills above.</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Add 8-12 relevant skills. Include both
              technical skills (programming languages, tools) and soft skills
              (leadership, communication).
            </p>
          </div>
        </div>
      </div>
      <ButtonForm />
    </>
  );
};

export default SkillsForm;
