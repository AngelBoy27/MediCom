app.controller('MainController', function($scope) {
    // Vista inicial que se muestra al cargar la página
    $scope.currentView = 'views/inicio.html';
    
    // Estado del menú móvil
    $scope.menuOpen = false;
    
    // Función para abrir/cerrar menú móvil
    $scope.toggleMenu = function() {
        $scope.menuOpen = !$scope.menuOpen;
    };
    
    // Función para cambiar entre páginas/vistas
    $scope.navigateTo = function(view, scrollTo) {
        $scope.currentView = view;
        // Cerrar menú móvil al navegar
        $scope.menuOpen = false;
        // Scroll hacia arriba al cambiar de página
        window.scrollTo(0, 0);
        
        // Si se especifica un elemento para desplazarse, esperar a que la vista se cargue
        if (scrollTo) {
            setTimeout(function() {
                var elemento = document.querySelector(scrollTo);
                if (elemento) {
                    elemento.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };
    
    console.log('MainController cargado');
});