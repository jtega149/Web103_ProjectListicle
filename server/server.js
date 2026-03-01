import express from 'express';
import concertsRouter from './routes/concerts.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/events', concertsRouter);
app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Ortega Listicle</h1>')
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})