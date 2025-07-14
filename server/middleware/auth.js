import jwt from "jsonwebtoken";
import User from "../models/User";

 

 export const protectRoute = async (req, res, next)=>{
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById()
    } catch (error) {
        
    }
 }