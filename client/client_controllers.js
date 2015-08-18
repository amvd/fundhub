 myApp.controller('UsersController', function($scope, UsersFactory) {
	        UsersFactory.getPopularProjects(function(data) {
	        $scope.users = data;
	        });

	        UsersFactory.getRecentlyFunded(function(data) {
	        $scope.users = data;
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

			UsersFactory.create($scope.newCompany, function() {
					            	UsersFactory.getCompanies(function(data) {
					            		$scope.companies = data;
					           		 });
					          	});
			$scope.newCompany = {};
    	});	
