import express from 'express';
import Users from '../controllers/userController';
import UserValidate from '../middleware/userCheck';

const router = express.Router();

const { UserSignIn } = Users;
const { loginValidator } = UserValidate;
const { UserSignUp } = Users;
const { AllUsers } = Users;

router.post('/users/signin', loginValidator, UserSignIn);
router.post('/users/signup', UserSignUp);
router.get('/users', AllUsers);

export default router;