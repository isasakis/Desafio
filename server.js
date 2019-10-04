const express = require('express');
const connectDB = require('./config/db');

const app = express();

/*
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use((req, res, next) => {
  req.io = io
  return next()
})

io.on('connection', function(socket){
  console.log('a user connected');
});
*/
//Connect database
connectDB();

app.use(express.json({ extended: false }));
  

app.use('/api/pessoas', require('./routes/api/pessoas'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
