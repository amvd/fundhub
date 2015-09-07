myApp.controller('UsersController', function($scope, UsersFactory) {
	        UsersFactory.getPopularCompanies(function(data) {

	        $scope.popular = data;
	        });

	        UsersFactory.getRecentlyFunded(function(output) {
	        $scope.recent = output;
	        });
    	});

myApp.controller('CompaniesController', function($scope, $routeParams, UsersFactory) {
	
	var id = $routeParams.id;
    // UsersFactory.getUsers(function(data) {
    // $scope.users = data;
    // });

	UsersFactory.getInvestments(function(investments){
    	$scope.investments = investments;
    });

	$scope.totalAmount = 0;

	for(var investment in $scope.investments){
		$scope.totalAmount += investment.amount;
	};

    UsersFactory.get_one_company(id, function(data) {
    	$scope.company = data;
    });

    UsersFactory.getCompanies(function(companies){
    	$scope.companies = companies;
    });



    $scope.investment = function() {
	          UsersFactory.investment($scope.newInvestment, function() {
	            UsersFactory.get_one_company(id, function(data) {
	            $scope.companies = data;
	            console.log(data);
	            });
	          });
	            $scope.newInvestment = {};
	        }

    $scope.createCompany = function(){

		UsersFactory.createCompany($scope.newCompany, function(data) {
				console.log("DING usersFactory createCompany");
				$scope.company = data;
			});
	}
});	


myApp.controller('ProjectsController', function($scope, UsersFactory) {

	        UsersFactory.get_one_company(id, function(data) {
	        $scope.companies = data;
	        });

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

	
