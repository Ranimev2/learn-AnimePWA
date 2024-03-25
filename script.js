// Anime data (title, genre, and URL)
const animeData = [
    { title: "Attack on Titan", genre: "Action, Drama, Fantasy", url: "https://ranimev3.site" },
    { title: "One Piece", genre: "Action, Adventure, Comedy", url: "https://ranimev3.site" },
    { title: "Naruto", genre: "Action, Adventure, Martial Arts", url: "https://ranimev3.site" }
    // Add more anime data as needed
];

// Function to populate anime list
function populateAnimeList() {
    const animeListContainer = document.getElementById('animeList');
    animeData.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('anime-item');

        const titleElement = document.createElement('h2');
        titleElement.textContent = anime.title;

        const genreElement = document.createElement('p');
        genreElement.textContent = "Genre: " + anime.genre;

        const linkElement = document.createElement('a');
        linkElement.textContent = "Watch Now";
        linkElement.href = anime.url;

        animeItem.appendChild(titleElement);
        animeItem.appendChild(genreElement);
        animeItem.appendChild(linkElement);

        animeListContainer.appendChild(animeItem);
    });
}

// Call function to populate anime list
populateAnimeList();
