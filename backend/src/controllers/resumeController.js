
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

// Get A Resume API
 const getResumeById = async (req,res) => {
     try {

         const resume = await ResumeModel.findOne({
            _id: req.params.resumeId,
            userId: req.userId,
         })
         if(!resume){
             return res.status(404).json("Resume was not found")
         }
         res.status(200).json({
            success: true,
            resume,
         })
        
     } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
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

// Create Personal Info API

const updatePersonalInfo = async (req,res) => {

    try {

        const resume = await ResumeModel.findOne({
            _id: req.params.resumeId,
            userId : req.userId,
        });

        if(!resume){
            return res.status(404).json({message: "Resume not found"});
        }

        resume.personalInfo = req.body;

        await resume.save();

        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({
            message : error.message,
        });
    }

} 

// Update Resume Summary

const updateSummary = async(req,res) => {

    try {

        const {content} = req.body;
        const resume = await ResumeModel.findOne({
            _id: req.params.resumeId,
            userId: req.userId
        })

        if(!resume){
            return res.status(404).json({
                message: "Resume not found",
            })
        }
        resume.summary={
            content,
        };

        await resume.save();

        res.status(200).json({
            success: true,
            resume
        })
    
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    
    }

}

// Update Resume Experience

const updateExperience = async(req,res) =>{

    try {
   
        const {experiences} = req.body;
        const resume = await ResumeModel.findOne({
            _id: req.params.resumeId,
            userId: req.userId
        })

        if(!resume){
            return res.status(404).json({
                message: "Resume not found",
            })
        }

         resume.experiences.push(...experiences)
          await resume.save();

         res.status(200).json(
            {
                success: true,
                experiences,
            }
         )
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
        
    }
}

 module.exports = {
    createResume,
    getResumeById,
    getAllResumes,
    updatePersonalInfo,
    updateSummary,
    updateExperience,
 }