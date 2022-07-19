const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const Movie = require('./db/Movie');



app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ err });
});

app.use('/api', require('./api'));

const init = async()=> {
  try {
    await db.syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
}

init();
