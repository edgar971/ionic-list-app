myApp.controller('SingleDrawingListCtrl', function($scope, DrawingsAPI, $stateParams){
	var drawingId = $stateParams.drawingID;
	
	DrawingsAPI.getSingleDrawing(drawingId).then(function(drawing){
		$scope.drawing = drawing;
	});
	
});