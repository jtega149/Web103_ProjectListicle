import { pool } from '../config/database.js';

export const getAllEvents = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM music_events ORDER BY id ASC');
        console.log(result.rows);
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(409).json({ error: 'Error fetching events' });
    }
}