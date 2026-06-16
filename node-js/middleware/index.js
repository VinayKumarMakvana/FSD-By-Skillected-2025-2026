const express = require('express');
const app = express();
const port = 4000;
const router = require('./router/fashion');


app.use(express.json());
app.use('/fashion',router);



app.listen(port, () => {
  console.log(`Middleware app listening on port ${port}`);
});

