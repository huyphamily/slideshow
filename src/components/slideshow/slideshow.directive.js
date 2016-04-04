export default function SlideshowDirective($timeout, CON) {
  return {
    restrict: 'E',
    scope: {
      'slides': '=',
      'trackEvent': '&?',
      'preloadImage': '&'
    },
    template: require('./slideshow.html'),
    link: (scope, element, attr) => {
      // initialize directive
      init();

     /**
      * next slide
      * - increment current index
      * - will preload next image
      */
      scope.next = () => {
        if (scope.currentIndex < scope.slidesCopy.length - 1) {
          scope.currentIndex++;
          loadNextImage(scope.currentIndex);
        }
        scope.trackEvent({event: CON.NEXT_CLICK});
      };

      // previous slide
      scope.prev = () => {
        if (scope.currentIndex > 0) {
          scope.currentIndex--;
        }
        scope.trackEvent({event: CON.PREV_CLICK});
      };

      // watch changes in current index
      scope.$watch('currentIndex', () => {
        scope.selectedSlide = scope.slidesCopy[scope.currentIndex]
      });

      // sort by alpha
      scope.sortByAlpha = () => {
        scope.slidesCopy.sort( (a, b) => {
         var titleA = a.title.toLowerCase();
         var titleB = b.title.toLowerCase();
         if (titleA < titleB) 
          return -1;
         if (titleA > titleB)
          return 1;
         return 0;
        });

        initImageLoad();
      };

      // sort by default
      scope.sortByDefault = () => {
        scope.slidesCopy = scope.slides.slice();
        initImageLoad();
      };

      /**
       * Initialize slide show.
       * - create shallow copy of slides
       * - initialize image load
       * - set track event to no-operation function if it is undefined
       */
      function init() {
        scope.CON = CON;
        scope.slidesCopy = scope.slides.slice();
        initImageLoad();
        scope.trackEvent = scope.trackEvent || function() {};
      }

      /**
       * Initialize image load.
       * - set initial picture of first image.
       * - load first two image.
       */
      function initImageLoad() {
        scope.currentIndex = 0;
        scope.selectedSlide = scope.slidesCopy[scope.currentIndex]
        loadNextImage(scope.currentIndex);
      }

      // preload next image
      function loadNextImage(index) {
        let nextSlide = scope.slidesCopy[index+1];
        if (nextSlide) {
          scope.preloadImage({src: nextSlide.image.imageUrl});
        }
      }

    }
  }
}

SlideshowDirective.$inject = ['$timeout', 'CON'];