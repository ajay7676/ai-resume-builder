const mongoose = require("mongoose");


const resumeSchema  = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true,
            trim: true,
        },
         userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
         },
         personalInfo: {
            fullName: String,
            email: String,
            phone: String,
            location: String,
            profession: String,
            linkedIn: String,
            website: String,
            summary: String,
        },
        summary: {
            content: {
                type: String,
                default: "",
            }
        }
    },
    {
        timestamps: true,
    }
);

 module.exports = mongoose.model(
    "ResumeModel",
     resumeSchema,
       "user_resumes"
 );