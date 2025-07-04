import express from 'express';
import cors from 'cors';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json({ limit: '1200mb' }));
app.use(express.urlencoded({
  extended: true
}));

import router from './Routes/Api.js';
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
