angular.module('app', [])
.controller('MainCtrl', function($scope) {
	$scope.error = true;
})
.directive('username', function() {
  	return {
	    require: 'ngModel',
	    link: function(scope, elm, attrs, ctrl) {
	      	var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
	      	ctrl.$validators.username = function(modelValue, viewValue) {
	      	
		    	if (usernames.indexOf(modelValue) != -1 || ctrl.$isEmpty(modelValue)) {
	        		scope.error = true;
	         	} else {
	            	scope.error = false;
	          	}
			    
	     	};
	    }
  	};
});