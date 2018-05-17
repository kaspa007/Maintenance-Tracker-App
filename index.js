

import express from 'express';
const app = express();

app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome'
  }));


// Listen for requests
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Hi there, listening on http://localhost:${port}`);
});

export default app;