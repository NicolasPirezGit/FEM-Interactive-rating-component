const mainContainer = document.querySelector(".main-container");
const submitBtn = document.querySelector("#submitRatingBtn");
const ratingOptions = document.querySelectorAll(".rating-options");


ratingOptions.forEach((option) => {
    option.addEventListener("click", () => {
        option.style.color = "hsla(0, 0%, 100%, 1)";
        option.style.backgroundColor = "hsla(25, 97%, 53%, 1)";

        for(let i = 0; i < ratingOptions.length; i++) {
            if(ratingOptions[i] != option){
                ratingOptions[i].style.color = "hsla(217, 12%, 54%, 1)";
                ratingOptions[i].style.backgroundColor = "hsla(213, 19%, 18%, 1)";
    
                ratingOptions[i].addEventListener("mouseover", () => {
                    ratingOptions[i].style.color = "hsla(0, 0%, 100%, 1)";
                    ratingOptions[i].style.backgroundColor = "hsla(217, 12%, 54%, 1)";
                });

                ratingOptions[i].addEventListener("mouseout", () => {
                    ratingOptions[i].style.color = "hsla(217, 12%, 54%, 1)";
                    ratingOptions[i].style.backgroundColor = "hsla(213, 19%, 18%, 1)";
                });
            }
            else {
                ratingOptions[i].addEventListener("mouseover", () => {
                    ratingOptions[i].style.color = "hsla(0, 0%, 100%, 1)";
                    ratingOptions[i].style.backgroundColor = "hsla(25, 97%, 53%, 1)";
                });

                ratingOptions[i].addEventListener("mouseout", () => {
                    ratingOptions[i].style.color = "hsla(0, 0%, 100%, 1)";
                    ratingOptions[i].style.backgroundColor = "hsla(25, 97%, 53%, 1)";
                });
            }
        }
    });
});


submitBtn.addEventListener("click", () => {
    mainContainer.classList.add("thanks-container");
    mainContainer.innerHTML = `
        <img src="images/illustration-thank-you.svg" class="phone-icon" alt="A support ticket coming out of a phone">
        
        <p class="main-select">
            You selected 4 out of 5
        </p>

        <h1 class="thanks-header">Thank you!</h1>
  
        <p class="thanks-message">
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
    `;
});