export default function routing($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      template: require('./main.html'),
      controller: 'MainController',
      controllerAs: 'main'
    });

  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.common['X-Content-Type-Options'] = 'nosniff';
}

routing.$inject = ['$routeProvider', '$httpProvider'];