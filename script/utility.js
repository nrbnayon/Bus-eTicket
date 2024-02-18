function hideCouponBtnById(elementId) {
  const coupon = document.getElementById(elementId);
  coupon.classList.add("hidden");
}
function showDiscountPrice(elementId) {
  const discount = document.getElementById(elementId);
  discount.classList.remove("hidden");
}

// Seats selection

const selectedSeats = [];
function selectSeat(event) {
  const seat = event.target;
  if (selectedSeats.length >= 4 && !seat.classList.contains("bg-[#1DD100]")) {
    alert("You can only select at most 4 seats.");
    return;
  }

  //Unselect
  if (seat.classList.contains("bg-[#1DD100]")) {
    seat.classList.remove("bg-[#1DD100]", "text-white");
    const index = selectedSeats.pop(seat);
    // const seatIndex = selectedSeats.indexOf(seat);
    // selectedSeats.splice(index, 1);
    console.log(index);
    seatsLeft++;
    setBuy--;
  }
  //Select
  else {
    seat.classList.remove("bg-[#F7F8F8]");
    seat.classList.add("bg-[#1DD100]", "text-white");
    selectedSeats.push(seat);
    console.log(selectedSeats);
    seatsLeft--;
    setBuy++;
  }
  seatsLeftElement.innerText = seatsLeft;
  seatBuyElement.innerText = setBuy;
}
