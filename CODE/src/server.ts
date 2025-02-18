import express from 'express';

const app = express();
app.use(express.json());


app.get('/test', (req, res) => {
  res.send({ message: 'Auth Service is running, On port IDK' });
});

const start = async () => {
  
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Auth service listening on port ${port}`);
  });
};

start();
