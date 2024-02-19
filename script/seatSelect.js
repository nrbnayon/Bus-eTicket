document
  .getElementById("buyTicketsBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const bookingSection = document.getElementById("booking");
    bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

const seats = document.querySelectorAll(".seat");

for (let i = 0; i < seats.length; i++) {
  seats[i].addEventListener("click", selectSeat);
}

//Available seats
const seatsLeftElement = document.getElementById("seats-left");
let seatsLeft = parseInt(seatsLeftElement.innerText);

//Bought Seats
const seatBuyElement = document.getElementById("seat-buy");
let setBuy = parseInt(seatBuyElement.innerText);

function closeModalAndReload() {
  my_modal_5.close();
  window.location.reload();
}
