import { useState } from "react";
import ImageUploader from "./ImageUploader";
import InputField from "./InputField";
import { FaBriefcase, FaEnvelope, FaGlobe, FaLinkedin, FaMapLocation, FaPhone, FaUser } from "react-icons/fa6";

const PersonalInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    linkedin: "",
    website: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
         <p className="text-sm text-gray-600">Get Started with the personal information</p>
         <ImageUploader />

         <InputField
          label="Full Name"
          icon={FaUser}
          value={formData.fullName}
          handleChange={handleChange}
          placeholder="Enter your full name"
          required
         />
         <InputField
          label="Email Address"
          icon={FaEnvelope}
          value={formData.email}
          handleChange={handleChange}
          placeholder="Enter your email address"
          required
         />
         <InputField
          label="Phone Number"
          icon={FaPhone}
          value={formData.phone}
          handleChange={handleChange}
          placeholder="Enter your phone number"
          required
         />
         <InputField
          label="Location"
          icon={FaMapLocation}
          value={formData.location}
          handleChange={handleChange}
          placeholder="Enter your location"
          required
         />
         <InputField
          label="Profession"
          value={formData.profession}
          handleChange={handleChange}
          icon={FaBriefcase}
          placeholder="Enter your profession"
          required
         />
         <InputField
          label="LinkedIn Profile"
          icon={FaLinkedin}
          value={formData.linkedin}
          handleChange={handleChange}
          placeholder="Enter your linkedIn profile"
          required
         />
         <InputField
          label="Personal Website"
          icon={FaGlobe}
          value={formData.website}
          handleChange={handleChange}
          placeholder="Enter your personal website"
          required
         />
          {/* Button */}
        <div className="mt-8">
          <button className="rounded-lg border border-green-500 bg-green-100 px-5 py-2 text-sm text-green-700 transition hover:bg-green-200">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
