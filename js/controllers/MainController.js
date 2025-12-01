app.controller('MainController', function($scope) {
    // Vista inicial que se muestra al cargar la página
    $scope.currentView = 'views/inicio.html';
    
    // Función para cambiar entre páginas/vistas
    $scope.navigateTo = function(view, scrollTo) {
        $scope.currentView = view;
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