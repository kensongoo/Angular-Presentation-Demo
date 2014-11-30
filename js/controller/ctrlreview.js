angular.module('Expedia.mobile.review.controller', [])
	.controller('ctrlReview', function($scope, $timeout) {

		$scope.submitReview = function($event) {
			alert('submitting name: '+ $scope.name + ' review: '+ $scope.review);

			$scope.coupon = 'Get 15% off the next stay with unlimited bloody mary drink';
		};

	});