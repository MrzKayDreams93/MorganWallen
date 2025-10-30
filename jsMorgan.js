// Fun popups!--//
alert("Hey Fans! Welcome to my page!");
alert("👀 No refunds on fake tickets! JK 😄");

// Wait until the DOM is loaded--//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("merchForm");
  const calculateBtn = document.getElementById("calculateBtn");
  const summary = document.getElementById("orderSummary");


  
  // === Fan Poll Boolean Example === //
const pollButton = document.getElementById("fanPollBtn");

if (pollButton) {
  pollButton.addEventListener("click", function () {
    let answer = prompt("Do you think Morgan deserves 5 stars? (yes or no)").toLowerCase();

    // Use a boolean to decide the message
    const lovesMorgan = answer === "yes";

    if (lovesMorgan) {
      alert("🎉 You're a true fan! Morgan says THANK YOU!");
    } else {
      alert("😅 What?! Try seeing him live — you’ll be converted!");
    }
  });
}





  //  norefresh form--//
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // Calculate total on button click--//
  calculateBtn.addEventListener("click", function () {
    const size = document.getElementById("size").value;
    const quantity = parseInt(document.getElementById("qty").value);

    //size and pricing--//
    let price = 0;  //begin amount<--//
    if (size === "xsmall") price = 25;
    else if (size === "small") price = 25;
    else if (size === "medium") price = 35;
    else if (size === "large") price = 45;
    else if (size === "xl") price = 45;
    else if (size === "xxl") price = 47;

    let total = price * quantity;
    let discount = 0;

//discount section//
    if (total > 100) {
      discount = total * 0.10;
      total -= discount;
    }

    // FINALLY!!!! --Showinggg results 🎉
    summary.innerHTML = `
      🧾 Size: <strong>${size}</strong><br>
      🧢 Quantity: <strong>${quantity}</strong><br>
      💰 Total Cost: <strong>$${total.toFixed(2)}</strong><br>
      ${discount > 0 ? `🎉 Discount Applied: $${discount.toFixed(2)}` : ""}
    `;


    //successful order placed!!--//
form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("✅ Order placed! We'll ship it as fast as Morgan can sing!");
});










  });
});