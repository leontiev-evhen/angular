angular.module('app', []);

app.directive('username', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
		ctrl.$validators.integer = function(modelValue, viewValue) {
			var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
			if (usernames.indexOf(modelValue) === -1) {
				
			}			
		}
		
  };
});