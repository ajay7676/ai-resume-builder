import ButtonForm from "./ButtonForm";

const ExperienceForm = () => {
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
            <button className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
              Add Experience
            </button>
          </div>
          <div className="text-center py-8 text-gray-500">
            <p>No work experience added yet.</p>
            <p className="text-sm">Click "Add Experience" to get started.</p>
          </div>
        </div>
      </div>
      <ButtonForm />
    </>
  );
};

export default ExperienceForm;
