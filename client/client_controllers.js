myApp.controller('UsersController', function($scope, UsersFactory) {
	        UsersFactory.getPopularProjects(function(data) {

	        $scope.popular = data;
	        });

	        UsersFactory.getRecentlyFunded(function(output) {
	        $scope.recent_funded = output;
	        });
    	});

myApp.controller('CompaniesController', function($scope, $routeParams, UsersFactory) {
	
	var id = $routeParams.id;
    UsersFactory.getUsers(function(data) {
    $scope.users = data;
    });

    UsersFactory.get_one_company(id, function(data) {
    $scope.companies = data;
    });
});	

myApp.controller('ProjectsController', function($scope, UsersFactory) {

	// UsersFactory.create($scope.newCompany, function() {
	// 		            	UsersFactory.getCompanies(function(data) {
	// 		            		$scope.companies = data;
	// 		           		 });
	// 		          	});
	// $scope.newCompany = {};

	$scope.createProject = function(){
		UsersFactory.createCompany($scope.newCompany, function(data) {
				$scope.company = data;
			});
		}
});	
