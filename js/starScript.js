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

// price
const setPrice = (slideNumber, cardNumber) => {
  const starName = `priceslide${slideNumber}card${cardNumber}`;
  const priceElement = document.querySelector(`.${starName}`);
  const ratingAttribute = priceElement.dataset[starName];
  console.log(ratingAttribute);
  priceElement.textContent = ratingAttribute ? `${ratingAttribute}L.E` : "free"
};

/**
 *
 * @param {Number of Slides} numberSlides
 */
const numberSlidesAndCards = (numberSlides) => {
  for (let s = 1; s <= numberSlides; s++) {
    console.log(s);
    setStarColors(s, 1);
    setPrice(s, 1)
  }
};
numberSlidesAndCards(document.querySelectorAll(".slider .slide").length);

// aboutSayCount
(aboutSayCount = () => {
  const countPerson = document.querySelector(".countperson");
  const countPersonDataSet = countPerson.dataset.countperson;
  countPerson.textContent = `+${countPersonDataSet}`;
})();

// starsComment
/**
 *
 * @param {get cardNumber from numberCommentCard function} cardNumber
 */
const setStarComments = (cardNumber) => {
  const starName = `starscomment${cardNumber}`;
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
 * @param {Number of Cards to Comments} numberCards
 */
const numberCommentCards = (numberCards) => {
  for (let c = 1; c <= numberCards; c++) {
    console.log(c);
    setStarComments(c);
  }
};
numberCommentCards(document.querySelectorAll(".comment").length);
