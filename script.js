// Function to render a film in the sidebar
function renderSidebarFilm(film, renderMainContent) {
    const sidebar = document.querySelector("#sidebar");

    let sidebarCard = document.createElement("div");
    sidebarCard.className = "sidebar-card";
    sidebarCard.innerHTML = `
        <img src="${film.poster}" alt="Film Poster">
        <div>
            <h4>${film.title.substring(0, 20)}...</h4>
            <p>Showtime: ${film.showtime}</p>
        </div>
    `;

    sidebar.appendChild(sidebarCard);

    // On click, update the main content area with this film's details
    sidebarCard.addEventListener("click", () => renderMainContent(film));
}

// Function to render a film in the main content area
function renderMainContent(film) {
    const mainContent = document.querySelector("#mainContent");
    mainContent.innerHTML = `
        <img src="${film.poster}" alt="Film Poster">
        <h1>${film.title} </h1>
        <h2>Description: ${film.description}</h2>
        <h3>Runtime: ${film.runtime} Minutes</h3>
        <h3>Showtime: ${film.showtime}</h3>
        <h3 class="capacity">Capacity: ${film.capacity - film.tickets_sold} Seats</h3>
        <button class="book-button" ${film.capacity - film.tickets_sold === 0 ? "disabled" : ""}>
            ${film.capacity - film.tickets_sold === 0 ? "Sold Out" : "Book Seat"}
        </button>
    `;

    // Add functionality to the "Book Seat" button
    const bookButton = mainContent.querySelector(".book-button");
    const capacityElement = mainContent.querySelector(".capacity");

    bookButton.addEventListener("click", () => {
        if (film.capacity - film.tickets_sold > 0) {
            alert("You have successfully booked a seat!");

            // Update tickets sold and available capacity
            film.tickets_sold += 1;
            const newCapacity = film.capacity - film.tickets_sold;
            capacityElement.textContent = `Capacity: ${newCapacity} Seats`;

            if (newCapacity === 0) {
                bookButton.textContent = "Sold Out";
                bookButton.disabled = true;
            }
        }
    });
}

// Function to fetch and render all films
function showAllFilms() {
    fetch('http://localhost:3000/films')
        .then(res => res.json())
        .then(films => {
            const sidebar = document.querySelector("#sidebar");
            const mainContent = document.querySelector("#mainContent");

            sidebar.innerHTML = ""; // Clear sidebar
            mainContent.innerHTML = ""; // Clear main content

            films.forEach((film, index) => {
                renderSidebarFilm(film, renderMainContent);

                // Render the first film in the main content by default
                if (index === 0) renderMainContent(film);
            });
        })
        .catch(error => console.error('Error fetching films:', error));
}

// Function to handle search functionality
function handleSearch() {
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();

        fetch('http://localhost:3000/films')
            .then(res => res.json())
            .then(films => {
                const filteredFilms = films.filter(film =>
                    film.description.toLowerCase().includes(query)
                );

                if (filteredFilms.length > 0) {
                    const sidebar = document.querySelector("#sidebar");
                    sidebar.innerHTML = ""; // Clear sidebar
                    filteredFilms.forEach(film => renderSidebarFilm(film, renderMainContent));

                    // Render the first filtered film in the main content
                    renderMainContent(filteredFilms[0]);
                } else {
                    alert(`No films found matching "${query}"`);
                }
            })
            .catch(error => console.error("Error searching films:", error));
    });
}

// Initialize all functionalities
function initialize() {
    showAllFilms(); // Fetch and show all films
    handleSearch(); // Set up search functionality
}

document.addEventListener("DOMContentLoaded", initialize);
