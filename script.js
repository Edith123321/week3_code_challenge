// Function to render a single film card
function renderFilm(film) {
    let card = document.createElement("div");
    card.className = "card";
    const capacityAvailable = film.capacity - film.tickets_sold;
   // card's inner html with the layout
    card.innerHTML = `
        <img src="${film.poster}" alt="Film Poster" class="film-poster">
        <div class="description-button">
            <div class="description">
                <h3 style="text-align: center; color: red;">${film.showtime}</h3>
                <h2>${film.description}</h2>
                <h3>Runtime: ${film.runtime} Minutes</h3>
                <h3 class="capacity">Capacity: ${capacityAvailable} Seats</h3>
            </div>
            <div class="button">
                <button class="book-button" ${capacityAvailable === 0 ? "disabled" : ""}>
                    ${capacityAvailable === 0 ? "Sold Out" : "Book Seat"}
                </button>
            </div>
        </div>
    `;

    // Add the film card to the container
    document.querySelector("#container").appendChild(card);

    // Add functionality to the Book Seat button
    const bookButton = card.querySelector(".book-button");
    const capacityElement = card.querySelector(".capacity");

    bookButton.addEventListener("click", () => {
        // Check if there are seats available
        if (film.capacity - film.tickets_sold > 0) {
            alert("You have successfully booked a seat!");


            // Update the tickets sold and the capacity available
            film.tickets_sold += 1;
            const newCapacityAvailable = film.capacity - film.tickets_sold;
            capacityElement.textContent = `Capacity: ${newCapacityAvailable} Seats`;

            // If sold out, disable the button and update its text
            if (newCapacityAvailable === 0) {
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
        .then(filmData => {
            document.querySelector("#container").innerHTML = ""; // Clear existing films
            filmData.forEach(film => renderFilm(film));
        })
        .catch(error => console.error('Error fetching films:', error));
}


// Function to handle search functionality
function handleSearch() {
    const searchBar = document.querySelector(".search-bar");
    const searchButton = document.querySelector(".search-button");


    searchButton.addEventListener("click", () => {
        const query = searchBar.value.toLowerCase();
        document.querySelector("#container").innerHTML = ""; // Clear previous results

         fetch('http://localhost:3000/films')
            .then((response) => response.json())
            .then((films) => {
                const filteredFilms = films.filter((film) =>
                    film.description.toLowerCase().includes(query)
                );


                if (filteredFilms.length === 0) {
                    document.querySelector("#container").innerHTML = `
                        <p style="text-align: center; color: gray;">No films found matching "${query}"</p>`;
                } else {
                    filteredFilms.forEach((film) => renderFilm(film));
                }
            })
            .catch((error) => {
                console.error("Error fetching films:", error);
                alert("An error occurred while searching.");
            });
    });
}

   
