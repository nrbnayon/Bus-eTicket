function hideCouponBtnById(elementId) {
  const coupon = document.getElementById(elementId);
  coupon.classList.add("hidden");
}
function showDiscountPrice(elementId) {
  const discount = document.getElementById(elementId);
  discount.classList.remove("hidden");
}

const selectedSeats = [];
let userName = "";
let userNumber = "";
function selectSeat(event) {
  const seat = event.target;
  if (selectedSeats.length >= 4 && !seat.classList.contains("bg-[#1DD100]")) {
    alert("You can only select at most 4 seats.");
    return;
  }

  //Unselect
  if (seat.classList.contains("bg-[#1DD100]")) {
    seat.classList.remove("bg-[#1DD100]", "text-white");
    const index = selectedSeats.indexOf(seat);
    selectedSeats.splice(index, 1);
    console.log(index);
    seatsLeft++;
    setBuy--;
    const seatNo = document.getElementById("seat-no");
    const newSeatToRemove = seatNo.querySelector(
      `[data-seat="${seat.innerText}"]`
    );
    seatNo.removeChild(newSeatToRemove);
  }
  //Select
  else {
    seat.classList.remove("bg-[#F7F8F8]");
    seat.classList.add("bg-[#1DD100]", "text-white");
    selectedSeats.push(seat);
    let seatNum = seat.innerText;
    seatsLeft--;
    setBuy++;

    const seatNo = document.getElementById("seat-no");
    let newSeat = document.createElement("div");
    newSeat.classList.add(
      "flex",
      "justify-between",
      "text-[#03071299]",
      "font-normal"
    );
    newSeat.innerHTML = `
        <p><span>${seatNum}</span></p>
        <p>Economic</p>
        <p>550</p>
        `;
    newSeat.setAttribute("data-seat", seat.innerText);
    seatNo.appendChild(newSeat);
  }
  seatsLeftElement.innerText = seatsLeft;
  seatBuyElement.innerText = setBuy;

  // Set Pricing
  let discount = 0;
  let ticketPrice = 0;
  if (setBuy === 1) {
    ticketPrice = 550;
  } else if (setBuy === 2) {
    ticketPrice = 550 * 2;
  } else if (setBuy === 3) {
    ticketPrice = 550 * 3;
  } else if (setBuy === 4) {
    ticketPrice = 550 * 4;
  }
  const ticketPriceElement = document.getElementById("seat-price");
  const totalTicketPrice = document.getElementById("total-price");
  const totalDiscount = document.getElementById("discount-taka");
  ticketPriceElement.innerText = ticketPrice;
  totalTicketPrice.innerText = ticketPrice;
  totalDiscount.innerText = discount;

  //Coupon apply
  const applyCoupon = document.getElementById("apply-coupon");
  if (setBuy === 4) {
    applyCoupon.removeAttribute("disabled");
    applyCoupon.addEventListener("click", function () {
      const couponCode = document.getElementById("coupon-code").value;
      console.log(couponCode);
      if (couponCode === "New15") {
        discount = (ticketPrice * 15) / 100;
        ticketPrice = ticketPrice - (ticketPrice * 15) / 100;
      } else if (couponCode === "Couple 20") {
        discount = (ticketPrice * 20) / 100;
        ticketPrice = ticketPrice - (ticketPrice * 20) / 100;
      }
      totalTicketPrice.innerText = ticketPrice.toFixed(2);
      totalDiscount.innerText = discount.toFixed(2);
    });
  } else {
    applyCoupon.setAttribute("disabled", true);
  }

  const getName = document
    .getElementById("user-name")
    .addEventListener("keyup", function (event) {
      userName = event.target.value;
      //   console.log(userName);

      const submitNext = document.getElementById("submit");
      if (setBuy > 0) {
        if (
          typeof userName === "string" &&
          typeof userNumber === "string" &&
          userNumber.length > 0
        ) {
          submitNext.removeAttribute("disabled");
        } else {
          submitNext.setAttribute("disabled", true);
        }
      }
    });

  const getNumber = document
    .getElementById("user-number")
    .addEventListener("keyup", function (event) {
      userNumber = event.target.value;
      //   console.log(userNumber);

      const submitNext = document.getElementById("submit");
      if (setBuy > 0) {
        if (
          typeof userName === "string" &&
          typeof userNumber === "string" &&
          userNumber.length > 0
        ) {
          submitNext.removeAttribute("disabled");
        } else {
          submitNext.setAttribute("disabled", true);
        }
      }
    });

  const submitNext = document.getElementById("submit");
  if (setBuy > 0) {
    if (
      typeof userName === "string" &&
      typeof userNumber === "string" &&
      userNumber.length > 0
    ) {
      submitNext.removeAttribute("disabled");
    } else {
      submitNext.setAttribute("disabled", true);
    }
  } else {
    // Add this else block
    submitNext.setAttribute("disabled", true);
  }
}
