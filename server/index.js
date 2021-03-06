require('dotenv/config');
const express = require('express');
const socket = require('socket.io');

// const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
// const emailTemplate = require('./email');
// const intTest = require('../client/util/intTest');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

// intTest
// next(new ClientError(`id ${id} is not a valid positive integer`, 400));

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_LOGIN,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// app.use('/api', (req, res, next) => {
//   next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
// });

const server = app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message, status: err.status });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

const io = socket(server);

io.on('connection', () => {
  // eslint-disable-next-line no-console
  console.log('made socket connection');
});

module.exports = app;
