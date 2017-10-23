var app = angular.module("app", []);
app.controller('FirstController', FirstController)
function FirstController ($scope) {
	var self = this;
	this.lesson = 'AngularJS lesson #1'
	this.data = [];

	this.addItem = function (item) {
		self.data.push(item);
		$scope.newItem = '';
	}
}

app.controller('SecondController', SecondController)
function SecondController ($scope) {
	this.months = ['mart', 'april', 'may', 'june', 'july', 'august'];
}
