class UserValidate {
    static loginValidator(req, res, next) {
 
        const { email, password } = req.body;
        
        req.check('email', 'Email is not valid').isEmail();
        req.check('password', 'Password is less than 5 characters').isLength({min:5});

       const errors = req.validationErrors();
        if (errors) {
            return res.status(400).json({
                error: errors[0].msg
            });
        }
        next();
    }
}

export default UserValidate;