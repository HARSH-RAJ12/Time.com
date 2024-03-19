const express = require('express');
const getLatestTimeStories = require('./getTimeStories');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/getTimeStories', async (req, res) => {
    try {
        const stories = await getLatestTimeStories();
        res.json(stories);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
