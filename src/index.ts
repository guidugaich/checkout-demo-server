import express from 'express';
import cors from 'cors';
import http from 'http';

import router from './routers';

const app = express();
app.use(cors({credentials: true}));

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('server running on port 3000');
});

app.use('/', router());