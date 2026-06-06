import { FaTrashCan } from "react-icons/fa6";

const ExperinenceInput = ({ experiences, setExperiences }) => {

  const handleChange = (e, index) => {
        // const updated = [...experiences];
        // updated[index][e.target.name] = e.target.value;
        // setExperiences(updated)
        const {name, value} = e.target;
        setExperiences ((prev) => prev.map((item,i) => 
        i === index ? {...item, [name]: value}: item
    ))
  };

   const deleteExperienceInput = (index) => {
     const updatedDeleteItems = experiences.filter((exp,i) => i !== index);
     setExperiences(updatedDeleteItems);
   
   }
  return (
    <>
      {experiences &&
        experiences.map((exp, index) => {
          return (
            <div className="space-y-4" key={index}>
            <div className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex justify-between items-start">
                <h4>Experience #1</h4>
                <button onClick={() => deleteExperienceInput(index)} className="text-red-500 hover:text-red-700 transition-colors">
                   <FaTrashCan />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={exp.company}
                  onChange={(e) => handleChange(e,index)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm placeholder:text-sm  placeholder:text-gray-400"
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Job Title"
                  value={exp.position}
                  onChange={(e) => handleChange(e,index)}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm placeholder:text-sm  placeholder:text-gray-400"
                />
                <input
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm placeholder:text-sm  placeholder:text-gray-400"
                  type="month"
                  name="startDate"
                  value={exp.startDate ? `${exp.startDate}-01` : ""}
                  onChange={(e) => handleChange(e,index)}
                />
                <input
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm placeholder:text-sm  placeholder:text-gray-400 disabled:bg-gray-100"
                  type="month"
                  name="endDate"
                  value={exp.endDate ? `${exp.endDate}-01` : ""}
                  onChange={(e) => handleChange(e,index)}
                />
              </div>
              <label className="flex items-center gap-2">
                <input
                  name="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  type="checkbox"
                />
                <span className="text-sm text-gray-700">
                  Currently working here
                </span>
              </label>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Job Description
                  </label>
                  <button
                    disabled
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
                  >
                    Enhance with AI
                  </button>
                </div>
                <textarea
                  rows={4}
                  name="description"
                  className="w-full text-sm px-3 py-2 rounded-lg resize-none"
                  placeholder="Describe your key responsibilities and achievements..."
                  value={exp.description}
                  onChange={(e) => handleChange(e,index)}
                />
              </div>
            </div>
          </div>
          )
        }
    )}
    </>
  );
};

export default ExperinenceInput;
