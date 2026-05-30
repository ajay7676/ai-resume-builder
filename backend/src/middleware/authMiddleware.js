const jwt = require("jsonwebtoken");

const authMiddleware = async (req,res,next) => {
        
    try {
        // Get Authorization  Header
        const authHeader = req.headers.authorization;

        // Check Header Exists
         if(!authHeader){
             return res.status(401).json({
                message: "User was not Authorized"
             });


         }

         // Remove Bearer Word
         const token = authHeader.split(" ")[1];

         // Verify Token

         const decoded = jwt.verify(token, process.env.JWT_SECRET);

         // Store User ID
         req.userId = decoded.id;

         // Go To Next Function
         next();
        
    } catch (error) {
         
        res.status(401).json(
            {
                message : "Invalid Token"
            }
        )
    }

    
}

module.exports = authMiddleware;