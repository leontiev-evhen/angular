(function() {
	
angular.module('app', ['ui.router'])

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
		controller:  function ($scope, addProducts) {
			$scope.addItem = function(item) {
				addProducts.add(item);
				$scope.item = '';
			};
		},
		
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

.component('leftSide', {
	bindings: {},
	controller: leftSideController,
	templateUrl: 'leftSide.html',
})


.component('rightSide', {
	bindings: {},
	controller: rightSideController,
	templateUrl: 'rightSide.html',
})


function leftSideController () {

}

function rightSideController ($scope) {
	console.log($scope)
}

})();