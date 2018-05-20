import express from 'express';
import Users from '../controllers/userController';
import UserValidate from '../middleware/userCheck';

const router = express.Router();

const { UserSignIn } = Users;
const { loginValidator } = UserValidate;
const { UserSignUp } = Users;

router.post('/users/signin', loginValidator, UserSignIn);
router.post('/users/signup', UserSignUp);

export default router;