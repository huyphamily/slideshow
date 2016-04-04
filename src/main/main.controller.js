export default class MainController {
  constructor(slide) {
    this.slide = slide;
    // fetch our data
    slide.getData();
  }
}

MainController.$inject = ['slide'];