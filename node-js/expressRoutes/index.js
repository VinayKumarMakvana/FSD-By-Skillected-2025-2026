const express = require('express');
const app = express();
const port = 3001;
const fashionRoutes = require('./routes/fashion');





app.use(express.json());




// middlewares
const loginMiddleware = function(req,res,next){
    console.log("inside login-middleware")
    next();
}

const authMiddleware = function(req,res,next){
    console.log("inside auth-middleware")
    next();
}

const validMiddleware = function(req,res,next){
    console.log("inside valid-middleware")
    next();
}


app.use(loginMiddleware);
app.use(authMiddleware);
app.use(validMiddleware);


app.get('/', (req, res) => {
    res.send("login Successful");
});




app.listen(port, () => {
  console.log(`New Express app listening on port ${port}`);
});