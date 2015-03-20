myApp.factory("DrawingsAPI", function($firebaseArray, FIREBASE_URL, $rootScope){
	var fireRef = new Firebase(FIREBASE_URL + "drawings/");
	var dataObj = $firebaseArray(fireRef);
	
	var appAPI = {
		getDrawings: function() {
			return dataObj;
		},
		
		addDrawing: function(drawingname) {
			dataObj.$add({"name" : drawingname}).then(function(ref){
				console.log(ref);
			});
		},
		removeDrawing: function(drawing) {
			dataObj.$remove(drawing).then(function(ref){
				console.log(ref);
			})
		}
		
	}
	
	return appAPI;
});