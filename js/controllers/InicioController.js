app.controller('InicioController', function($scope) {
    console.log('InicioController cargado');

    // Función para navegar a la página de agendar (ngRoute)
    $scope.navigateToAgendar = function() {
        $scope.$parent.navigateTo('/agendar');
    };
});