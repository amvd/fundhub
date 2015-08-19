 myApp.controller('RegisterController', function($scope, $location, UsersFactory) {

      $scope.register = function(){
          UsersFactory.register($scope.registerUser);
          console.log($scope.registerUser);
            $location.path('/');
            $scope.newUser = {};
        }
      }); 