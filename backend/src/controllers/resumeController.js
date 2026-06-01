
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

 module.exports = {
    createResume
 }