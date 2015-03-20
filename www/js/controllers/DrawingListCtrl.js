myApp.controller('DrawingListCtrl', function($scope, $ionicModal, DrawingsAPI) {
	$scope.drawings = DrawingsAPI.getDrawings();
	$scope.data = {
    	showDelete: false
  	};
	$scope.newItem = {name: ""};
	$ionicModal.fromTemplateUrl('/js/templates/addDrawingModal.html', {
    	scope: $scope,
		animation: 'slide-in-up'
  	}).then(function(modal) {
    	$scope.modal = modal;
  	});
  	
  	
  	

	$scope.deleteDrawing = function(drawing) {
		DrawingsAPI.removeDrawing(drawing);
	}
	$scope.openAddModal = function() {
		$scope.modal.show();
	}
	$scope.closeAddModal = function() {
		$scope.modal.hide();
	}
	$scope.addDrawing = function(){
		DrawingsAPI.addDrawing($scope.newItem.name);
		$scope.closeAddModal();
		$scope.newItem.name = "";
	}
	
	
});