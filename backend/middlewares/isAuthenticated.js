import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({
        message: "User is not authenticated.",
        success: false,
      });
    }
    const decode = await jwt.verify(token, process.env.KEY);
    if (!decode) {
      return res.status(400).json({
        message: "Invcalid token.",
        success: false,
      });
    }
    req.id=decode.userId;
    next(); //goes to next 
  } catch (error) {
    console.log(error);
    
  }
};
export default isAuthenticated;
