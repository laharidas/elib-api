import express from 'express';

const app = express();

//Routes
app.get('/', (req, res, next) => {
  console.log(' Hello ', req.route);
  res.json({ message: 'Welcome to ES Lib' });
});

export default app;
