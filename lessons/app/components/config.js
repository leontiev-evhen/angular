(function() {
	angular.module('app')
	.config(function($stateProvider) {
		var homeState = {
			name: 'home',
			url: '/home',
			component: 'home',
		}

		var productsState = {
			name: 'products',
			url: '/products',
			component: 'products',
			resolve: {
				products: function(ProductService) {
					return ProductService.getProducts();
				}
			}
		}
		
		var productState = {
			name: 'product',
			url: '/product/{productId}',
			component: 'product',
			resolve: {
				product: function(ProductService, $transition$) {
					return ProductService.getProduct($transition$.params().productId);
				}
			}
		}
		
		$stateProvider.state(homeState);
		$stateProvider.state(productsState);
		$stateProvider.state(productState);
		
	})
})();