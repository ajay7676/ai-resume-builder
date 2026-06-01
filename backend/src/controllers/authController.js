const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create Signup  API
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check User

    const existingUser = await UserModel.findOne({
      email,
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password,10);

    // Create User
    const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
    });

    // Genrate JWT
    const token = jwt.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        {
             expiresIn: "7d",
        }
    );

    res.status(201).json({
        message: "Signup successful",
        token,
        user
    })

  } catch (error) {
    res.status(500).json({
        message: error.message,
    })
  }
};

// Create Login API
const login = async(req,res) =>{

    try {
        const{email , password} = req.body;

        // Check User

        const user = await UserModel.findOne({email});

        if(!user){
          return res.status(400).json({
            message: "Invalid Email"
          });
        }

        //  Compared Password
        const isMatchPassword = await bcrypt.compare(password , user.password);
        
        if(!isMatchPassword){
          return res.status(400).json({
            message: "Invalid Password"
          });
        }

        // Genrate JWT
        const token = jwt.sign(
          {
            id:user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn : "7d"
          }
        );


        res.status(200).json({
          message: "Login successful",
          token,
          user,
          
        })
    } catch (error) {

      res.status(500).json({
        message: error.message
      })
      
    }
  
};


// Create Profile API 

const getProfile = async (req,res) =>{
  try {
    const user = await UserModel.findById(req.userId).select("-password");
    if(!user){
      return res.status(404).json({
        message: "User not found",
      })
    }
    res.status(200).json({
      success: true,
      user
    })
    
  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
    
  }
}

// Create Create Resume  API
const createResume = async(req,res) =>{

}

module.exports = {
    signup,
    login,
    getProfile,
  createResume
}


