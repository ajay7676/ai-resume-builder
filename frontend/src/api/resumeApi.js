import axiosInstance from "./axiosInstance"


// Call Create Resume API
export const  createResume = async (title) => {

    const response =  await axiosInstance.post(
        "/resume/create"  ,
         {title},
        );

        return response.data;


}

// Call Get All Resumes API

export const getAllResumes = async () => {
     const response = await axiosInstance.get("/resume/all");
     
     return response.data;
}


// Update Personal Information 

export const updatePersonalInfo = async(resumeId, personalInfo) => {
    const {data} = await axiosInstance.put(`/resume/${resumeId}/personal-info` , personalInfo);
    return data


}

