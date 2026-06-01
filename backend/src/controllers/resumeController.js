
const ResumeModel = require("../models/resumeModel");



// Create Create Resume  API
const createResume = async(req,res) =>{
      try {

         const {title} = req.body;
         if(!title){
            return res.status(400).json({
                message :  "Resume title is required",
            })
         }

        const resume = await ResumeModel.create({
            title,
            userId : req.userId,
        })
        
        res.status(201).json({
            success: true,
            resume,
        })
      } catch (error) {
        res.status(500).json({
            message: error.message,
        });
        
      }

}


// Get All Resumes API

const getAllResumes = async(req,res) => {

    try {

        const resumes  = await ResumeModel.find({
        userId: req.userId,
    }).sort({updatedAt: -1});

    res.status(200).json({
        success: true,
        resumes
    })
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
        
    }
}

 module.exports = {
    createResume,
    getAllResumes
 }