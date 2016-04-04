export default function routing($routeProvider) {
  $routeProvider
    .otherwise('/');
}

routing.$inject = ['$routeProvider'];