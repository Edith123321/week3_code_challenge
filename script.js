// Function to render a single film card
function renderFilm(film) {
    let card = document.createElement("div");
    card.className = "card";
    const capacityAvailable = film.capacity - film.tickets_sold;
