import jwt from 'jsonwebtoken';
import users from '../models/users';

class Authenticator {
    static userAuth ( req, res, next) {
        const token = req.headers['x-access-token'];
        console.log("help me");
        const decoded = jwt.verify( token, "secret" ); {
             if (!decoded) {
                    return res.status(400).json({
                    error: "invalid token"
                });
            }
           next();
        }
    
    }
    static reqAuth ( req, res, next) {
        const { subject, requestType, requestDetails } = req.body;
        console.log("help me");

       if (!( subject.trim() || requestType.trim() || requestDetails.trim())) {
        return res.status(400).json({
            error: "Please fill in all details"
       })
    }
    next();
}
}

export default Authenticator;