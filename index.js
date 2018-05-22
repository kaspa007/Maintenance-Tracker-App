import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes';
import expressValidator from 'express-validator';
import jwt from 'jsonwebtoken';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(expressValidator());

// global.IdGen = ;

app.use('/api/v1', routes);

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome'
  }));

// app.post('/users/signin', (req, res) => {
//   const { email, password } = req.body;
//   for (let i = 0; i < users.length; i++) {
//     if (email == users[i].email && password == users[i].password) {
//       return res.status(200).json({
//         message: 'Logged in successfully!',
//         error: false
//       });
//     }
//   }
//   // if (email === users[1].email && password === users[1].password) {
//   //   return res.status(200).json({
//   //     message: 'Logged in successfully!',
//   //     error: false
//   //   });
//   // }
//   return res.status(404).json({
//     message: 'Error logging in',
//     error: true
//   })
// });


// Listen for requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Hi there, listening on http://localhost:${port}`);
});

export default app;
