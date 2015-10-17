angular.module("barit", ["ui.router", "ui.bootstrap"])
	   .config(Router)

function Router ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state("home", {
			url:"/",
			templateUrl:"home.html" 
		})
		.state("map", {
			url:"/map",
			templateUrl:"map.html"
		})
}
