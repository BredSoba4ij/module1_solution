(function () {
	'use strict';

	angular.module('LunchChecker', [])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.items = "";
		$scope.message = "";
		$scope.brdStyle = {};
		$scope.txtStyle = {};

		$scope.checkItems = function () {
			let items = getLunchItems($scope.items);

			if(isItemsEmpty()){
				$scope.message = "Please enter data first";
				$scope.txtStyle = { color: 'red'};
				$scope.brdStyle = { 'border-color': 'red'};
			} else if(items.length > 3) {
				$scope.message = 'Too much!';
				styleGreen();
			} else {
				$scope.message = 'Enjoy!';
				styleGreen();
			}

		}

		$scope.clearMessage = function () {
			if(isItemsEmpty()){
				$scope.message = "";
				$scope.brdStyle = { 'border-color':'black' };
				$scope.txtStyle = { color:'black' };
			}
		}

		function isItemsEmpty() {
			return $scope.items == "";
		}

		function styleGreen() {
			$scope.txtStyle = { color: 'green'};
			$scope.brdStyle = { 'border-color': 'green'};
		}

	}

	function getLunchItems(str) {
		let items = str.split(',');
		items = items.map(item => item.trim() );
		let result = items.filter(item => item);

		return result;
	}

	


})();