
class Slider {
  constructor(pos) {
    this.left = pos
    this.timer
  }
  selectEl() {
    this.slidesCount = document.querySelectorAll(".slider-item");
    this.sliderRange = document.getElementById("slider-range");
  }
  autoSlider() {
    this.timer = setTimeout(this.sliderLeft.bind(this), 1000);
  }
  countSlide() {
    let slide = document.querySelectorAll(".our-team__slider-item").length;
    return (slide - 18) * 60;
  }
  sliderLeft() {
    this.left -= 60;
    let sliders = this.countSlide();

    if (this.left < -sliders) {
      this.left = 0;
      clearTimeout(this.timer);
    }
    this.autoSlider();
    this.sliderRange.style.left = this.left + "px";
  }
  start() {
    this.selectEl();
    this.autoSlider();
  }
}
let slider1 = new Slider(0);
slider1.start();
