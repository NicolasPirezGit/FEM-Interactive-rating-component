let ratingOptions = document.querySelectorAll(".rating-options");

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

