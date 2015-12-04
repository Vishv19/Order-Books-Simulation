bookStubApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'tmpl/home.html',
      controller:'bookStubController'
    }).when('/book/:id', {
      templateUrl: 'tmpl/book.html',
      controller:'bookDetailsController'
    }).when('/bookings', {
      templateUrl:'tmpl/bookings.html',
      controller:'bookingDetailsController'
    }).when('/bookCopies/:id', {
      templateUrl: 'tmpl/bookCopies.html',
      controller:'bookTicketsController'
    }).otherwise({
      redirectTo:'/'
    });
});