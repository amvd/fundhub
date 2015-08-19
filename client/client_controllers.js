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

	        UsersFactory.get_one_company(id, function(data) {
	        $scope.companies = data;
	        })

	        $scope.investment = function() {
	          UsersFactory.investment($scope.newInvestment, function() {
	            UserssFactory.get_one_company(id, function(data) {
	            $scope.companies = data;
	            console.log(data);
	            });
	          });
	            $scope.newInvestment = {};
	        }

	        $scope.createProject = function(){
				UsersFactory.createCompany($scope.newCompany, function(data) {
						$scope.company = data;
					});
				}
    	});	


	// UsersFactory.create($scope.newCompany, function() {
	// 		            	UsersFactory.getCompanies(function(data) {
	// 		            		$scope.companies = data;
	// 		           		 });
	// 		          	});
	// $scope.newCompany = {};

	
