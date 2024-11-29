import app from './src/app';

const startServer = (name: string) => {
  const port: string = process.env.PORT || '3000';

  app.listen(port, () => {
    console.log(`${name} computer Listening on port ${port}`);
  });
};

startServer(' Haridas');
