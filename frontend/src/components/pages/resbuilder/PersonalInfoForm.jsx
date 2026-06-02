import { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import InputField from "./InputField";
import { FaBriefcase, FaEnvelope, FaGlobe, FaLinkedin, FaMapLocation, FaPhone, FaUser } from "react-icons/fa6";
import { updatePersonalInfo } from "../../../api/resumeApi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentResume } from "../../../features/resume/resumeSlice";

const PersonalInfoForm = () => {
  const {resumeId} = useParams();
 const allResumes = useSelector((state) => state?.resume?.resumes);
  // console.log(allResumes)
   const currentResume  = allResumes.find((resume) =>  resume._id === resumeId);
  console.log(currentResume)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    linkedIn: "",
    website: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = async() => {

    try {
       console.log(formData)

      const  data = await updatePersonalInfo(
      resumeId ,
         formData
      );
       console.log(data);
       dispatch(setCurrentResume(data));
        alert("Save Successfully");

      
    } catch (error) {
       console.log(error.message)
      
    }
      
  }

  useEffect(() => {
       if(currentResume?.personalInfo){
        setFormData({
          fullName: currentResume.personalInfo.fullName || "",
          email: currentResume.personalInfo.email || "",
          phone: currentResume.personalInfo.phone || "",
          location: currentResume.personalInfo.location || "",
          profession: currentResume.personalInfo.profession || "",
          linkedIn: currentResume.personalInfo.linkedIn || "",
          website: currentResume.personalInfo.website || "",
        })
       }
  } , [currentResume])
  return (
    <>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
         <p className="text-sm text-gray-600">Get Started with the personal information</p>
         <ImageUploader />

         <InputField
          label="Full Name"
          icon={FaUser}
          name={Object.keys(formData)[0]}
          value={formData.fullName}
          handleChange={handleChange}
          placeholder="Enter your full name"
          required
         />
         <InputField
          label="Email Address"
          icon={FaEnvelope}
            name={Object.keys(formData)[1]}
          value={formData.email}
          handleChange={handleChange}
          placeholder="Enter your email address"
          required
         />
         <InputField
          label="Phone Number"
          icon={FaPhone}
            name={Object.keys(formData)[2]}
          value={formData.phone}
          handleChange={handleChange}
          placeholder="Enter your phone number"
          required
         />
         <InputField
          label="Location"
          icon={FaMapLocation}
            name={Object.keys(formData)[3]}
          value={formData.location}
          handleChange={handleChange}
          placeholder="Enter your location"
          required
         />
         <InputField
          label="Profession"
            name={Object.keys(formData)[4]}
          value={formData.profession}
          handleChange={handleChange}
          icon={FaBriefcase}
          placeholder="Enter your profession"
          required
         />
         <InputField
          label="LinkedIn Profile"
          icon={FaLinkedin}
            name={Object.keys(formData)[5]}
          value={formData.linkedin}
          handleChange={handleChange}
          placeholder="Enter your linkedIn profile"
          required
         />
         <InputField
          label="Personal Website"
          icon={FaGlobe}
          name={Object.keys(formData)[6]}
          value={formData.website}
          handleChange={handleChange}
          placeholder="Enter your personal website"
          required
         />
          {/* Button */}
        <div className="mt-8">
          <button onClick={handleSave} className="rounded-lg border border-green-500 bg-green-100 px-5 py-2 text-sm text-green-700 transition hover:bg-green-200">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
