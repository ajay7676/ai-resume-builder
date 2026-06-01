import axiosInstance from "./axiosInstance"

export const  createResume = async (title) => {

    const response =  await axiosInstance.post(
        "/resume/create"  ,
         {title},
        );

        return response.data;


}