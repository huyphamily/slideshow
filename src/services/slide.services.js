export default class Slide {
  constructor($http, CON) {
    this.$http = $http;
    this.CON = CON;
    this.loading = false;
  }

  getData() {
    this.loading = true;
    this.$http.jsonp('https://api2.healthline.com/api/service/2.0/slideshow/content?partnerId=7eef498c-f7fa-4f7c-81fd-b1cc53ac7ebc&contentid=17103&includeLang=en&callback=JSON_CALLBACK')
      .then( (response) => {
        if (response.status === 200) {
          this.data = response.data.data[0];
          this.title = this.data.title;
          this.summary = this.data.summary;
          this.slides = this.data.slides;
        } else {
          this.error = response;
        }
        this.loading = false;
      },
      // error
      (error) => {
        console.log(error);
        this.error = error;
        this.loading = false;
      });
  }

  trackEvent(event) {
    let currentEvent = event ? `&event=${event}` : '';
    let src = `/images/clear.gif?unique=${this.randomNumber(17)}${currentEvent}`;
    this.preloadImage(src);
  }

  randomNumber(n) {
    return Math.floor(Math.random()*Math.pow(10,n));
  }

  preloadImage(src) {
    let image = new Image;
    if (typeof image.onload !== 'function') {
      image.onload = function() {
        console.log('successfully loaded image', this.src);
      }
    }
    image.src = `${this.CON.DOMAIN}${src}`;
    image = null;
  }
}

Slide.$inject = ['$http', 'CON'];