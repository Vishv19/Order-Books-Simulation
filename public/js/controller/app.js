bookStubApp.controller('bookStubController', function($scope, bookStubFactory, $location) {
  $scope.headerSrc = "tmpl/header.html";

  $scope.books = bookStubFactory.query();

  $scope.currBook = null;

  $scope.getMovieById = function(id) {
    var books = $scope.books;
    for(var i = 0; i < books.length; i++) {
      var movie = books[id];
      if(movie.id == id) {
        $scope.currBook = movie;
      }
    };
  };

  $scope.back = function() {
    window.history.back();
  };

  $scope.getCount = function(n) {
    return new Array(n);
  };

  $scope.isActive = function(route) {
    return route === $location.path();
  };

  $scope.isActivePath = function(route) {
    return ($location.path()).indexOf(route) >= 0;
  };
});

bookStubApp.controller('bookDetailsController', function($scope, $routeParams) {
  $scope.getMovieById($routeParams.id);
});
bookStubApp.controller('bookTicketsController', function($scope, $http, $location, $routeParams) {
  $scope.getMovieById($routeParams.id);
  $scope.onlyNumbers = /^\d+$/;
  $scope.formData = {};
  $scope.formData.movie_id = $scope.currBook.id;
  $scope.formData.movie_name = $scope.currBook.name;
  $scope.formData.date = "Today";

  $scope.processForm = function() {
    console.log($scope.formData);
    $http({
      method:'POST',
      url:'/book',
      data:$.param($scope.formData),
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).
    success(function(data) {
      $location.path('/bookings');
    });
  };
});
bookStubApp.controller('bookingDetailsController', function($scope, bookStubBookingsFactory) {
  $scope.bookings = bookStubBookingsFactory.query();
});