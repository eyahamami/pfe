const http = require('http');
const app = require('./index');
var config = require('./config/connection');
const server = http.createServer(app);
const port = process.env.PORT || 3001; // Utilisez le port spécifié dans process.env.PORT ou 3000 par défaut

server.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
