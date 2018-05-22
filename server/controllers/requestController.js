import users from '../models/users';
import requests from '../models/requests';
import jwt from 'jsonwebtoken';

class Requests{
    static UserAllRequest (req, res ) {

        const token = req.headers['x-access-token'];
        const decoded = (jwt.verify( token, "secret").id);
        console.log(decoded);

        // const Reqlist = requests.filter(request => return request.id == decoded);

        // const Reqlist = requests.find(function (request) { return requests.id === 3; })

        // const Reqlist = requests.find(request => requests.id ==decoded);
        // console.log(Reqlist)
        const Reqlist = requests.filter(function (request) {
            return request.id === decoded;

          });
          console.log(Reqlist);


        if (Reqlist.length <= 1) {
            return res.status(404).json({
                message: 'Sorry, you have not made any request!',
                error: true
            });
        }
        res.status(200).json({
            message: 'Here are the list of your requests',
            ListOfRequest: Reqlist,
            error: false
         })



        // for (let i = 0; i < users.length; i++) {
        //     if (decoded == requests[i].id) {
        //     return res.status(200).json({
        //         message: 'Logged in successfully!',
        //         token: token,
        //         error: false
        //     });
        //     }
        // }
        // return res.status(200).json({
        //     request
        // })
         
    }
}
export default Requests;
