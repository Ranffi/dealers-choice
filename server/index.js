const express = require("express")
const app = express()
const morgan = require("morgan")
const path = require("path")
const db = require('./db')
//initialize app
//require morgan|volleyball, path packages
//require db from /db
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "./public")))

app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!

//require in your routes and use them on your api path
app.use('/api', require('./routes'))


//404 handler
app.use((req, res, next) => {
  const error = Error(`Page not found(${req.url})`);
  error.status = 404;
  next(error);
})

//500 handler
app.use((err, req, res, next) => {
  console.log(err, err.stack);
  res.status(err.status || 500).send(`
  <html>
    <body>
      <h1 style = color:crimson>${err}</h1>
      <p>${err.stack}</p>
    </body>
  </html>`)
})

//set PORT

//listen

const port = process.env.PORT || 3000;

const init = async () => {
  try{
      
     await db.syncAndSeed();
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch (err) {
    console.log(err);
  }
}

init();
