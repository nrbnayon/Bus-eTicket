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

// const totalDiscount = document.getElementById("discount-taka");
// let discountTaka = parseInt(totalDiscount.innerText);
