angular.module('app')
.factory('Profile', profileService)

function profileService($http) {
    var o = {}
    
    o.getProfile = () => {
        return $http.get('/api/profile');
    }
    
    return o;
}