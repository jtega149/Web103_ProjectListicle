import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import musicEvents from '../data/musicEvents.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.status(200).json(musicEvents);
})

router.get('/:id', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/event.html'));
})

export default router;