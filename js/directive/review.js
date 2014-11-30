angular.module('Expedia.mobile.directive.review', [])
	.directive('expediaReview', function() {

		return {
			// replace: true,
			scope: {
				hotelName: '@'
			},

			controller: function($scope) {
				$scope.submitReview = function($event) {
					alert('submitting name: '+ $scope.name + ' review: '+ $scope.review);
					$scope.coupon = 'Get 15% off the next stay with unlimited bloody mary drink';
				};						
			},

			template: '<div class="row">'
									+ '<h1> {{ hotelName }} </h1>'
									+ '<section class="col-xs-6">'
										+ '<button class="btn btn-primary" ng-show="coupon"> {{ coupon }} </button>'
										+ '<div class="hotel-image"></div>'
									+ '</section>'
									+ '<section class="col-xs-6 reviewForm" ng-cloak>'
										+ '<h2> Reviews </h2>'
										+ '<p> {{ review }} </p>'
									+ '<footer class="reviewName"> {{ name }} </footer>'
									+ '<h2> Write a review </h2>'
									+ '<form role="form">'
										+ '<div class="form-group">'
											+ '<label> Name </label>'
											+ '<input class="form-control" type="text" ng-model="name">'
										+ '</div>'
										+ '<div class="form-group">'
											+ '<label> Review </label>'
											+ '<textarea class="form-control" ng-model="review"></textarea>'
										+ '</div>'
										+ '<div class="form-group">'
											+ '<button type="submit" class="btn btn-default" ng-click="submitReview($event)"> Submit </button>'
										+ '</div>'
									+ '</form>'
								+ '</section>'	
								+'</div>'
		}
	});
