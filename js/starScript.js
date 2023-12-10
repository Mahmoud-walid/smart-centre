/**
 *
 * @param {Place the slide between 3 slides} slideNumber
 * @param {Place card between three cards. Each slide contains three cards} cardNumber
 */

const setStarColors = (slideNumber, cardNumber) => {
  const starName = `starsslide${slideNumber}card${cardNumber}`;
  const starsElement = document.querySelector(`.${starName}`);
  const ratingAttribute = starsElement.dataset[starName];
  // console.log(ratingAttribute);
  // console.log(starsElement);

  for (let i = 1; i <= 5; i++) {
    const starElement = starsElement.querySelector(`.star${i}`);
    if (i <= ratingAttribute) {
      starElement.style.color = "orange";
      starElement.classList.remove("fa-regular");
      starElement.classList.add("fa-solid");
    } else {
      starElement.style.color = "grey";
    }
  }
};

/**
 *
 * @param {Number of Slides} numberSlides
 * @param {Number of Cards in each slide} numberCards
 */
const numberSlidesAndCards = (numberSlides, numberCards) => {
  for (let s = 1; s <= numberSlides; s++) {
    for (let c = 1; c <= numberCards; c++) {
      console.log(s, c);
      setStarColors(s, c);
    }
  }
};
numberSlidesAndCards(document.querySelectorAll(".slide").length, 3);


// price

