const expresss = require('express');
const { createUser, signIn, getAllUsers, updateUser, getUser, deleteUser } = require('../../controllers/user-controller');
const { createProduct, getAllProducts, deleteProduct, getProduct, updateProduct } = require('../../controllers/product-controller');

const router = expresss.Router();

router.post('/user',createUser);
router.post('/login',signIn);

// Product
router.post('/product',createProduct);
// router.get('/product',getAllProducts);
router.get('/product/:id',getProduct);
router.put('/product/:id',updateProduct);
router.delete('/product/:id',deleteProduct);

// User
router.get('/user',getAllUsers);
router.get('/user/:id',getUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);

// category

module.exports = router;