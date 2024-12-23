import { Router } from "express";
import { changePassword, forgetPassword, getUserDetails, loginUser, logoutUser, registerUser, updateUserDetails } from '../controller/User.controller.js';
import { verifyJWT } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const userRouter = Router();
userRouter.get('/',verifyJWT,getUserDetails)
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/logout',logoutUser)
userRouter.post('/update',verifyJWT,upload.none(),updateUserDetails)
userRouter.post('/forgetpassword',forgetPassword)
userRouter.post('/changepassword',changePassword)

export default userRouter