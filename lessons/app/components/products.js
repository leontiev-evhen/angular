(function() {
angular.module('app')
.component('products', {
	bindings: { products: '<' },
	template: '<h1>Products</h1>' +
            '<ul>' +
            '  <li ng-repeat="item in $ctrl.products">' +
            '    <a ui-sref="product({ productId: item.id })">' +
            '      {{item.name}}' +
            '    </a>' +
            '  </li>' +
            '</ul>'
})
})();