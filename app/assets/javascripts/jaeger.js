var app = angular.module('jaeger', []);

app.controller('jaegerController',['$scope', '$http', function($scope, $http) {
  $http.get('/jobs.json').success(function(response) {
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
