const axios = require('axios');
const cheerio = require('cheerio');

async function getLatestTimeStories() {
    try {
        const response = await axios.get('https://time.com/');
        const $ = cheerio.load(response.data);

        const stories = [];

        $('.homepage-module.latest a').each((index, element) => {
            if (index < 5) {
                const title = $(element).text().trim();
                const link = $(element).attr('href');

                stories.push({ title, link });
            }
        });

        // Additional articles
        stories.push({
            title: "Ukraine Can’t Win the War",
            link: "https://time.com/6695261/ukraine-forever-war-danger/"
        });

        stories.push({
            title: "What It Feels Like to Be a Muslim Woman Auctioned Online by India’s Right Wing",
            link: "https://time.com/6140574/muslim-women-india/"
        });

        stories.push({
            title: "Why You Shouldn’t Exercise to Lose Weight",
            link: "https://time.com/6138809/should-you-exercise-to-lose-weight/"
        });

        stories.push({
            title: "The Life-Changing Practice That Will Help You Feel More Gratitude",
            link: "https://time.com/6140818/how-to-feel-gratitude-kindness-catalog/"
        });

        stories.push({
            title: "There’s So Much More To Say About Bill Cosby",
            link: "https://time.com/6140051/we-need-to-talk-about-cosby-showtime/"
        });

        stories.push({
            title: "What Norway Can Teach the World About Switching to Electric Vehicles",
            link: "https://time.com/6133180/norway-electric-vehicles/"
        });
 
        return stories;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

module.exports = getLatestTimeStories;
