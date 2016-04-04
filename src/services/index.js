import angular from 'angular';
import Slide from './slide.services';

export default angular
  .module('app.services', [])
  .service('slide', Slide)
  .name;