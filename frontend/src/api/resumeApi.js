// import axiosInstance from "./axiosInstance"

import axiosInstance from './axiosInstance'


// Call Create Resume API
export const  createResume = async (title) => {

    const response =  await axiosInstance.post(
        "/resume/create"  ,
         {title},
        );

        return response.data;


}
//Get A Resdume API

export const getResumeById = async (resumeId , userId) =>  {

    const response = await axiosInstance.get(`/resume/${resumeId}` , userId);
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
    return data;


}

 // Update Personal Summary

  
 export const updatePersonalSummary = async(resumeId , summaryData) =>{
     try {

        const {data} = await axiosInstance.put(`/resume/${resumeId}/summary` , summaryData);
        return data;
        
     } catch (error) {
         console.log(error)
        
     }

 }

  // Update Personal Experience 

  export const  updatePersonalExperience = async(resumeId, resExperience) =>{
     try {

        const {data} = await axiosInstance.put(`/resume/${resumeId}/experience` ,resExperience);
     return data;
        
     } catch (error) {
         console.log(error.message);
        
     }
  }

