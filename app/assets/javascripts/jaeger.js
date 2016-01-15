var app = angular.module('jaeger', []);

app.factory('Job', function() {
    var factory = {};
    // attach properties/function like get, post, put, delete here
    // can refactor to use $resource instead of $http
    factory.get = function() {
      return $http.get('/jobs.json');
    }
    return factory;
  })

app.controller('jaegerController',['$scope', '$http', 'Job', function($scope, $http, Job) {
  Job.get()
    .success(function(response) {
      $scope.jobs = response.jobs;
    });

  $scope.addJob = function(){
    // Validate that company input is not blank
    if(!$scope.company || $scope.company === '') { return; }
    $scope.jobs.push({company: $scope.company, email: $scope.email, date_posted: $scope.date_posted, date_emailed: $scope.date_emailed, email_template: $scope.email_template, addressed_to: $scope.addressed_to, notes: $scope.notes});
    $scope.company = '';
    $scope.email = '';
    $scope.date_posted = '';
    $scope.date_emailed = '';
    $scope.email_template = '';
    $scope.addressed_to = '';
    $scope.notes = '';
  };

}]);
