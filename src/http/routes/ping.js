import { Router } from 'express';
import { controller } from '../controllers/ping.js';

const router = Router();

router.get('/', controller.ping);

router.get('/next',  (req, res) => {
    res.send('ping')
} )

export { router as ping }