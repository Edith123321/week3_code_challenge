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

