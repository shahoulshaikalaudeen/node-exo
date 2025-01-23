const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
};

startServer();
