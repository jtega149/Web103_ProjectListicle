import './dotenv.js';
import { pool } from './database.js';
import musicEvents from '../data/musicEvents.js';

const resetTable = async () => {
    const query = `
        DROP TABLE IF EXISTS music_events;
        CREATE TABLE music_events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            artist VARCHAR(255) NOT NULL,
            genre VARCHAR(100) NOT NULL,
            ticket_price INT NOT NULL,
            venue_size INT NOT NULL,
            description TEXT NOT NULL,
            image VARCHAR(255) NOT NULL
        );
    `
    try {
        await pool.query(query);
        console.log('Table reset successfully');
    } catch (err) {
        console.error('Error resetting table:', err);
    }
}

const seedTable = async () => {
    await resetTable();
    musicEvents.forEach(async (occasion) => {
        const { title, artist, genre, ticketPrice, venueSize, description, image } = occasion;
        const query = "INSERT INTO music_events (title, artist, genre, ticket_price, venue_size, description, image) VALUES ($1, $2, $3, $4, $5, $6, $7)";
        const values = [title, artist, genre, ticketPrice, venueSize, description, image];
        try {
            await pool.query(query, values);
            console.log(`Inserted: ${title}`);
        } catch (err) {
            console.error(`Error inserting ${title}:`, err);
        }
    })
}

seedTable()