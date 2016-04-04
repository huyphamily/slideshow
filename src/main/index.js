import angular from 'angular';
import ngRoute from 'angular-route';
import config from './main.config';
import MainController from './main.controller';

export default angular
  .module('app.main', [
    ngRoute,
  ])
  .config(config)
  .controller('MainController', MainController)
  .name;