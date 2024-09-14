import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRouter from "./routes/user.routes.js"
import productRouter from './routes/product.routes.js';
import { verifyJWT } from './middleware/auth.middleware.js';
import sellerRouter from './routes/seller.routes.js';
import addressRouter from './routes/address.routes.js';
import productReviewRouter from './routes/ProductReview.routes.js';
import wishListRouter from './routes/wishlist.routes.js';
const app = express();
app.use(express.json({ limit: '50mb' }));  // Increase limit for JSON payloads
app.use(express.urlencoded({ limit: '50mb', extended: true }));  // Increase limit for URL-encoded form data

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors({
    origin: 'http://localhost:5173',  
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    credentials : true,
  }));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/productReview', verifyJWT, productReviewRouter);
app.use('/api/v1/seller', verifyJWT,sellerRouter);
// app.use('/api/v1/cart', verifyJWT, cartRoutes);
// app.use('/api/v1/order', verifyJWT, orderRoutes);
app.use('/api/v1/wishlist', verifyJWT, wishListRouter);
app.use('/api/v1/address', verifyJWT, addressRouter);

export default app;