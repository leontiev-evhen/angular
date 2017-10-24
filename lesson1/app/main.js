angular.module('app', [])
/*.controller('Controller', ['$scope', function($scope) {
	$scope.name = 'Yevhen';
}])

.directive('myDialog', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			newName: '@?newName'
		},
		template: 'Hello, my name is {{newName}}'
  };
})

.directive('myDialogController', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			newName: '@?newName'
		},
		controller: ['$scope', function MyTabsController($scope) {
			console.log($scope.newName)
		}],
		template: 'Hello, my name is {{newName}}'
  };
})*/


.factory('addProducts', ['$window', function() {
	products = [];
	return {
		add: function(item) {
			products.push(item);
		},
		get: function() {
			return products;
		},
	};
 }])
 

.directive('myInput', function() {
	
	return {
		restrict: 'E',
		transclude: true,
		controller: ['$scope', 'addProducts', function MyController($scope, addProducts) {
				$scope.addItem = function(item) {
					addProducts.add(item);
					$scope.item = '';
				};
		}],
		
		template: '<p><input type="text" ng-model="item"><button ng-click="addItem(item);">Add</button></p>'
		
	};
})

.directive('list', function() {
	
	return {
		restrict: 'E',
		transclude: true,
		
		controller: ['$scope', 'addProducts', function MyController($scope, addProducts) {
			$scope.prod = addProducts.get();
		}],
		template: '<ul><li ng-repeat="item in prod track by $index">{{item}}</li></ul>'
		
	};
})




