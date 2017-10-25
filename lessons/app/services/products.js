(function() {
angular.module('app')
.service('ProductService', function($http) {
	var service = {
		getProducts: function() {
			return $http.get('data/products.json', { cache: true }).then(function(response) {
				return response.data;
			});
		},
		
		getProduct: function(id) {
			function productMatchesParam(product) {
				return product.id === id;
			}
		  
			return service.getProducts().then(function (products) {
				return products.find(productMatchesParam)
			});
		}
	}
  
	return service;
})
})();