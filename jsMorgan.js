// ===== Welcome Popups ===== //
// Commented out for testing, may re-enable later
// alert("Hey Fans! Welcome to my page!");
// alert("👀 No refunds on fake tickets! JK 😄");


// --- Scroll to Top Button (on All Pages) --- //
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}




// --- Wait for DOM to Load First --- //
document.addEventListener("DOMContentLoaded", function () {

  // ===============================
  // 💥 SHOP PAGE FUNCTIONALITY
  // ===============================

  // pulls in the form, button, and summary section--
  const merchForm = document.getElementById("merchForm");
  const calculateBtn = document.getElementById("calculateBtn");
  const summary = document.getElementById("orderSummary");

  if (merchForm && calculateBtn && summary) {


    // Prevent the form refresh--
    merchForm.addEventListener("submit", function (event) {
      event.preventDefault();
    });

    // calculate button function --
    calculateBtn.addEventListener("click", function () {
      const size = document.getElementById("size").value;
      const quantity = parseInt(document.getElementById("qty").value);

      // price based on size--
      let price = 0;
      if (size === "xsmall") price + 25;
      else if (size === "small") price = 25;
      else if (size === "medium") price = 35;
      else if (size === "large") price + 45;
      else if (size === "xl") price = 45;
      else if (size === "xxl") price = 47;

      // --discount for orders over $100--
      let total = price * quantity;
      let discount = 0;

      if (total > 100) {
        discount = total * 0.10;
        total -= discount;
      }

      // Show the results in the summary section---
      summary.innerHTML = `
        🧾 Size: <strong>${size}</strong><br>
        🧢 Quantity: <strong>${quantity}</strong><br>
        💰 Total Cost: <strong>$${total.toFixed(2)}</strong><br>
        ${discount > 0 ? `🎉 Discount Applied: $${discount.toFixed(2)}` : ""}
      `;

      // Confirmation popup---
      alert("✅ Order placed! We'll ship it as fast as Morgan can sing!");
    });
  }


  // ===============================
  //  NEWSLETTER SIGNUP FUNCTIONALITY
  // ===============================

  // Only runs if the newsletter form exists---
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      //pulls name from form input to personalize the message<-----
      const name = document.getElementById("name").value;

      // Confirmation message
      alert(`✅ Thanks, ${name}! You're officially in the MW Fanclub! 🎉`);

      // Reset the form after submission
      newsletterForm.reset();
    });
  }

// ===============================
//  FAN POLL BOOLEAN INTERACTION
// ===============================

const pollButton = document.getElementById("fanPollBtn");

// Only run if the button exists on the page
if (pollButton) {
  pollButton.addEventListener("click", function () {
    
    // === Question 1: Do they love Morgan? ===
    let answer = prompt("Do you think Morgan deserves 5 stars? (yes or no)").toLowerCase();
    const lovesMorgan = answer === "yes";

    if (lovesMorgan) {
      alert("🎉 You're a true fan! Morgan says THANK YOU!");
    } else {
      alert("😅 What?! Try seeing him live — you’ll be converted!");
    }

    // === Question 2: Are they planning to buy tickets? ===
    const buyingTicketsAnswer = prompt("Are you planning to buy tickets to Morgan's next concert? (yes or no)").toLowerCase();
    const buyingTickets = buyingTicketsAnswer === "yes";

    if (buyingTickets) {
      alert("🎟️ Awesome! Get ready for an unforgettable experience!");
    } else {
      alert("🎶 No worries! Keep enjoying the music and maybe catch a live show someday!");
    }

    // === Question 3: Have they seen Morgan live? ===
    const seenConcertAnswer = prompt("Have you ever seen Morgan live in concert? (yes or no)").toLowerCase();
    const seenConcert = seenConcertAnswer === "yes";

    if (seenConcert) {
      alert("🎸 Rock on! Morgan loves his live audience!");
    } else {
      alert("🎤 You’re missing out! Hope to see you at a concert soon!");
    }
  });
}












    });
