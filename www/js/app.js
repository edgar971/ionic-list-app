// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('starter', ['ionic', 'firebase']).constant('FIREBASE_URL', 'https://mobiledrawingapp.firebaseio.com/');


myApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('drawings', {
      url: "/drawings",
      abstract: true,
      templateUrl: "/js/templates/appTabs.html"
    })
    .state('drawings.list', {
      url: "/list",
      views: {
        'home-tab': {
          templateUrl: "/js/templates/drawingsList.html",
          controller: 'DrawingListCtrl'
        }
      }
    })
    .state('drawings.single', {
	    url: "/:drawingID",
	    views: {
		    'home-tab': {
			    templateUrl: "/js/templates/drawingSingle.html",
			    controller: 'SingleDrawingListCtrl'
		    }
	    }
    });
    $urlRouterProvider.otherwise("/drawings/list");

});

