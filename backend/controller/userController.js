// import user from "../Models/userModel.js";
import User from "../Models/userModel.js";
import { responseMessages } from "../config/response.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
    try {

      const userData = req.body;
      console.log(userData);
      userData.password = bcrypt.hashSync(userData.password, 10); 
      userData.confirmPassword= userData.password;
      const checkEmail = await User.findOne({ email: userData.email });
      
      if (checkEmail) {
        return res.json(responseMessages.EMAIL_EXIST);
      }
      
      const createdUser = await User.create(userData);
      
      if (createdUser) {
        return res.json(responseMessages.ACCOUNT_CREATED);
      }
      
      return res.json(responseMessages.ACCOUNT_CREATION_FAILED);
    } catch (error) {
      console.error("Error creating user:", error); // Log the error for debugging
      return res.status(400).json({ status: 400, message: "Catch error: " + error.message });
    }
  };