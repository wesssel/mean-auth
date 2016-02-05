angular.module('app')
.controller('profileController', profileController)

function profileController(profile) {
    var vm = this;
    
    vm.profile = profile.data;
}