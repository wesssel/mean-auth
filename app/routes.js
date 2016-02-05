angular.module('app')
.config(config)

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('login', {
		url: '/login',
		templateUrl: '/profile/login.html'
	})
    .state('profile', {
        url: '/profile',
        templateUrl: '/profile/profile.html',
        controller: 'profileController as vm',
        resolve: {
            profile: function(Profile){
                return Profile.getProfile()
            }
        }
    })
    
	$urlRouterProvider.otherwise('/login');
};