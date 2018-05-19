import users from '../models/users';

class Users {
    static UserSignIn(req, res) {
        const { email, password } = req.body;
        for (let i = 0; i < users.length; i++) {
            if (email.toLowerCase() == users[i].email && password == users[i].password) {
            return res.status(200).json({
                message: 'Logged in successfully!',
                error: false
            });
            }
        }
        // if (email === users[1].email && password === users[1].password) {
        //   return res.status(200).json({
        //     message: 'Logged in successfully!',
        //     error: false
        //   });
        // }
        return res.status(404).json({
            message: 'Error logging in',
            error: true
        })
    }
}
export default Users;