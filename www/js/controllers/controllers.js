myApp.controller('DrawingListCtrl', function($scope, $ionicModal) {
	$ionicModal.fromTemplateUrl('/js/templates/addDrawingModal.html', {
    	scope: $scope,
		animation: 'slide-in-up'
  	}).then(function(modal) {
    	$scope.modal = modal;
  	});
  	
  	
	$scope.drawings = [
		{
			"name": "Drawing 1"
		},	
		{
			"name": "Drawing 2"
		},
		{
			"name": "Drawing 3"
		}
	];

	$scope.deleteDrawing = function(drawing) {
		var index = $scope.drawings.indexOf(drawing);
		$scope.drawings.splice(index, 1);
	}
	$scope.openAddModal = function() {
		$scope.modal.show();
	}
	$scope.closeAddModal = function() {
		$scope.modal.hide();
	}
	$scope.addDrawing = function(){
		var newItem = {
			"name": "Drawing " +  $scope.drawings.length
		}
		$scope.drawings.push(newItem);
		$scope.closeAddModal();
	}
	
	
});