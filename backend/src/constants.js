import dotenv from "dotenv";
dotenv.config();
export const Mongo_DB_URL = process.env.MONGODB_URL
export const PORT = process.env.PORT;
export const cookieOptions = { httpOnly: true, secure: false, sameSite: 'Lax' }
export const ACCESS_TOKEN_SECRET_KEY=process.env.ACCESS_TOKEN_SECRET_KEY
export const ACCESS_TOKEN_EXPIRY=process.env.ACCESS_TOKEN_EXPIRY_DATE
export const REFRESH_TOKEN_SECRET_KEY=process.env.REFRESH_TOKEN_SECRET_KEY
export const REFRESH_TOKEN_EXPIRY=process.env.REFRESH_TOKEN_EXPIRY_DATE
export const BCRYPT_SORTORROUNDS=process.env.BCRYPT_SORTORROUNDS 
export const CLOUD_NAME=process.env.CLOUD_NAME 
export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY 
export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET