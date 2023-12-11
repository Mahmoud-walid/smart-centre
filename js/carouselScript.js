class Slider {
  constructor() {
    this.slides = document.querySelectorAll(".slide");
    this.btnRight = document.querySelector(".sliderBtnRight");
    this.btnLeft = document.querySelector(".sliderBtnLeft");
    this.curSlide = 0;
    this.maxSlide = this.slides.length;

    this.goToSlide(0);

    this.btnRight.addEventListener("click", () => this.nextSlide());
    this.btnLeft.addEventListener("click", () => this.previousSlide());

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") this.nextSlide();
      if (event.key === "ArrowLeft") this.previousSlide();
    });
  }

  goToSlide(slide) {
    this.slides.forEach((ele, i) => {
      const offset = 10; // Adjust the offset value as needed
      ele.style.transform = `translateX(${(i - slide) * (100 + offset)}%)`;
    });

    this.btnRight.style.backgroundColor = "";

    if (slide === this.maxSlide - 1) {
      this.btnRight.style.backgroundColor = "gray";
    }
  }

  nextSlide() {
    if (this.curSlide < this.maxSlide - 1) {
      this.curSlide++;
      this.goToSlide(this.curSlide);
    }
  }

  previousSlide() {
    if (this.curSlide > 0) {
      this.curSlide--;
      this.goToSlide(this.curSlide);
    }
  }
}

const mySlider = new Slider();

// const slider = document.querySelector('.slider');
// slider.style.transform = `scale(0.4) translateX(-800px)`;
// slider.style.overflow = `visible`;
