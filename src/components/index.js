import angular from 'angular';
import SlideshowDirective from './slideshow/slideshow.directive';
import './slideshow/slideshow.scss';

export default angular
  .module('app.components', [])
  .directive('slideshow', SlideshowDirective)
  .name;