import angular from 'angular';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';
import route from './route';

// our components
import main from './main/index';
import components from './components/index';
import services from './services/index'


angular
  .module('app', [
    ngRoute,
    ngSanitize,
    main,
    components,
    services
  ])
  .config(route)
  .constant('CON', {
    'DOMAIN': 'http://www.healthline.com',
    'PREV_CLICK': 'prevclick',
    'NEXT_CLICK': 'nextclick'
  });

// bootstrap angular
angular.element(document).ready( function() {
  angular.bootstrap(document, ['app']);
});