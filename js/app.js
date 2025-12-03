var app = angular.module('centroMedicoApp', ['ngRoute']);

// Configurar rutas de la aplicación
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/inicio', {
            templateUrl: 'views/inicio.html',
            controller: 'InicioController'
        })
        .when('/nosotros', {
            templateUrl: 'views/nosotros.html',
            controller: 'NosotrosController'
        })
        .when('/servicios', {
            templateUrl: 'views/servicios.html',
            controller: 'ServiciosController'
        })
        .when('/blog', {
            templateUrl: 'views/blog.html',
            controller: 'BlogController'
        })
        .when('/agendar', {
            templateUrl: 'views/agendar.html',
            controller: 'AgendarController'
        })
        .when('/contacto', {
            templateUrl: 'views/contacto.html',
            controller: 'ContactoController'
        })
        .otherwise({
            redirectTo: '/inicio'
        });
    
    // Habilitar HTML5 mode para URLs sin # (comentado porque requiere backend config)
    // $locationProvider.html5Mode(true);
});