(function() {
angular.module('app')
.component('product', {
	bindings: { product: '<' },
	template: 	'<h1>{{$ctrl.product.name}}</h1>' +
				'<div>{{$ctrl.product.description}}</div>'
});
})();