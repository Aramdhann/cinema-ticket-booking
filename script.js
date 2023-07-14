const movieContainer = document.getElementById("movie-container");
const accountName = localStorage.getItem("username");

document.getElementById("account-name").innerText =
    "Hi! " + accountName + " Selamat Menonton!";

fetch("https://seleksi-sea-2023.vercel.app/api/movies")
    .then((response) => response.json())
    .then((data) => {
        let movieHTML = "";
        let movieTitles = data.map((movie) => movie.title);

        for (let i = 0; i < data.length; i++) {
            const movieDetails = data[i];

            const movieItemHTML = `
      <div class="movie-details">
  <img src="${movieDetails.poster_url}" alt="${movieDetails.title}">
  <div class="movie-info">
    <h2 class="movie-title" id="selectedMovie">${movieDetails.title}</h2>
    <p class="movie-description">${movieDetails.description}</p>
    <p class="movie-age-rating">Age Rating: ${movieDetails.age_rating}</p>
    <p class="movie-release-date">Release Date: ${movieDetails.release_date}</p>
    <p class="movie-ticket-price">Ticket Price: ${movieDetails.ticket_price}</p>
    <button style="width: 100%; padding: 0.5rem; background-color: #337ab7; color: #fff; border: none; border-radius: 4px; cursor: pointer;" class="selectSeat" onclick="handleBuyTicket('movieTitle')">Select Seat</button>
  </div>
</div>
      `;

            movieHTML += movieItemHTML;
        }

        movieContainer.innerHTML = movieHTML;
    })
    .catch((error) => {
        console.error("Error:", error);
    });
