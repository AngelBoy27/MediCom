app.controller('MainController', function($scope, $location) {
    // Estado del menú móvil
    $scope.menuOpen = false;
    
    // Función para abrir/cerrar menú móvil
    $scope.toggleMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
    };
    
    // Función para cambiar entre páginas/vistas usando $location
    $scope.navigateTo = function(path) {
        $location.path(path);
        // Cerrar menú móvil al navegar
        $scope.menuOpen = false;
        // Scroll hacia arriba al cambiar de página
        window.scrollTo(0, 0);
    };
    
    // Detectar ruta actual para marcar botones como activos
    $scope.isActive = function(path) {
        return $location.path() === path;
    };
    
    // Monitorear cambios en la ruta
    $scope.$on('$routeChangeSuccess', function() {
        // Scroll al top cuando se cambia de vista
        window.scrollTo(0, 0);
    });
    
    console.log('MainController cargado');
});