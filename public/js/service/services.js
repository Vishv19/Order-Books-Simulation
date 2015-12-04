window.bookStubApp = angular.module('bookStubApp', ['ngResource', 'ngRoute']);
bookStubApp.factory('bookStubFactory', function($resource) {
  return $resource('/books');
});
bookStubApp.factory('bookStubBookingsFactory', function($resource) {
  return $resource('/bookings');
});