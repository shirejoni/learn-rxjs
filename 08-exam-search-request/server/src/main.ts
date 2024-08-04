// src/app.ts
import express from 'express';
import cors from 'cors'; // Import the cors package
import { cities, City } from './data';

const app = express();
const port = 3000;

app.use(cors()); // Use CORS middleware
app.use(express.json());

// Search API
app.get('/api/search', (req, res) => {
    const query = req.query.q as string;
    if (!query) {
        return res.status(400).json({ error: "Query parameter 'q' is required." });
    }

    const results = cities.filter(
        (city) => city.name.toLowerCase().includes(query.toLowerCase()) || city.description.toLowerCase().includes(query.toLowerCase())
    );

    res.json(results);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
