import express from 'express';
import Users from '../controllers/userController';
import UserValidate from '../middleware/userCheck';

const router = express.Router();

const { UserSignIn } = Users;
const { loginValidator } = UserValidate;


router.post('/users/signin', loginValidator, UserSignIn);

export default router;