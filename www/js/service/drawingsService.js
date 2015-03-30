myApp.factory("DrawingsAPI", function($firebaseArray, FIREBASE_URL, $rootScope){
	var fireRef = new Firebase(FIREBASE_URL + "drawings/");
	var dataObj = $firebaseArray(fireRef);
	var appAPI = {
		//Get all drawings
		getDrawings: function() {
			return dataObj;
		},
		//get single drawing based on given ID
		getSingleDrawing: function(drawingID) {
			var singleDrawing = dataObj.$loaded(function(allDrawings){
				
				return allDrawings.$getRecord(drawingID);
			});
			
			return singleDrawing;
		}, 
		//add drawing with name
		addDrawing: function(drawingname) {
			dataObj.$add({"name" : drawingname}).then(function(ref){
				console.log(ref);
			});
		},
		//removed drawing
		removeDrawing: function(drawing) {
			dataObj.$remove(drawing).then(function(ref){
				console.log(ref);
			})
		},
		
	}
	
	return appAPI;
});