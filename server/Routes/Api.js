import express from 'express';
import { Router } from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello World!');
}
);

export default router;