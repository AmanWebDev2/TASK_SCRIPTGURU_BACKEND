const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require("./config/index");
const { connectDb } = require('./config/db');
const { createUser,signIn } = require('./controllers/user-controller');

const apiRoutes = require('./routes/index');
const protect = require('./middlewares/protect-route');
const products  = require('./utils/sample-product');
const { createCategory, getCategory } = require('./controllers/category-controller');
const CategoryService = require('./services/category-service');
const ProductService = require('./services/product-service');
const Product = require('./models/product-model');
const { getAllProducts } = require('./controllers/product-controller');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use('/api',protect,apiRoutes);

app.use('/product',getAllProducts);
app.use('/category',getCategory);

app.use('/sign-up',(req,res,next)=>{
    const { email, password,name } = req.body;
    if(!email || !password || !name) {
        return res.status(400).json({
            sucess: false,
            message: 'name,username,email and password are required'
        })
    }
    next();
},createUser);
app.use('/sign-in',(req,res,next)=>{
    const { email, password } = req.body;
    console.log(email,password)
    if(!email || !password) {
        return res.status(400).json({
            sucess: false,
            message: 'email and password required'
        })
    }
    next();
},signIn);


app.listen(PORT,async()=>{
    await connectDb();
    console.log(`server is listening on http://localhost:${PORT}`);
})