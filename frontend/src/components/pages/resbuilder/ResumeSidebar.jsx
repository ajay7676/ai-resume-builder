import { useState } from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import ResumeHeader from "./ResumeHeader";
import ProfessionalSummary from "./ProfessionalSummary";
import ExperienceForm from './ExperienceForm'
import EducationForm from "./EducationForm";
import ProjectsForm from './ProjectsForm'
import SkillsForm from "./SkillsForm";

const ResumeSidebar = () => {
  const [currentStep, setCurrentStep] = useState(6);
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="relative lg:col-span-5 rounded-lg overflow-hidden">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
        <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200"></hr>
        <hr className="absolute top-0 left-0  h-1 bg-linear-to-r from-green-500 to-green-600 border-none transition-all duration-2000"></hr>
        <ResumeHeader nextStep={nextStep} prevStep={prevStep} currentStep={currentStep} />
        {currentStep === 1 && <PersonalInfoForm />}
        {currentStep === 2 && <ProfessionalSummary />}
        {currentStep === 3 && <ExperienceForm />}
        {currentStep === 4 && <EducationForm />}
        {currentStep === 5 && <ProjectsForm />}
        {currentStep === 6 && <SkillsForm />}
      </div>
    </div>
  );
};

export default ResumeSidebar;
