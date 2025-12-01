app.controller('InicioController', function($scope, DataService) {
    console.log('InicioController cargado');
    
    // Inicializar el término de búsqueda vacío
    $scope.searchTerm = '';
    
    // Servicios principales (4 servicios) usando ng-repeat
    $scope.serviciosPrincipales = [
        {
            id: 1,
            nombre: 'Urgencias',
            descripcion: 'Atención inmediata las 24 horas del día, los 7 días de la semana para emergencias médicas.',
            icon: '🚨'
        },
        {
            id: 2,
            nombre: 'Imagenología',
            descripcion: 'Estudios de diagnóstico por imagen: rayos X, ultrasonido, tomografía y resonancia magnética.',
            icon: '📋'
        },
        {
            id: 3,
            nombre: 'Laboratorio',
            descripcion: 'Análisis clínicos completos con tecnología de vanguardia y resultados rápidos.',
            icon: '🔬'
        },
        {
            id: 4,
            nombre: 'Medicina General',
            descripcion: 'Consulta general para diagnóstico, tratamiento y prevención de enfermedades.',
            icon: '🩺'
        }
    ];

    // Cargar especialidades desde JSON usando HTTP request
    DataService.getEspecialidades().then(function(data) {
        $scope.especialidades = data;
        console.log('Especialidades cargadas desde JSON:', data);
    }).catch(function(error) {
        console.error('Error al cargar especialidades, usando datos de respaldo:', error);
        // Datos de respaldo si falla la carga del JSON
        $scope.especialidades = [
            { id: 1, servicio: 'Neurología', disponibilidad: 'Lun-Vie 9:00-18:00', precio: 800 },
            { id: 2, servicio: 'Traumatología y Ortopedia', disponibilidad: 'Lun-Sáb 8:00-20:00', precio: 750 },
            { id: 3, servicio: 'Cardiología', disponibilidad: 'Lun-Vie 10:00-19:00', precio: 900 },
            { id: 4, servicio: 'Pediatría', disponibilidad: 'Lun-Sáb 8:00-18:00', precio: 650 },
            { id: 5, servicio: 'Nutrición', disponibilidad: 'Lun-Vie 9:00-17:00', precio: 550 },
            { id: 6, servicio: 'Cirugía Maxilofacial', disponibilidad: 'Mar-Jue 10:00-16:00', precio: 1200 },
            { id: 7, servicio: 'Cirugía Plástica', disponibilidad: 'Lun-Vie 11:00-17:00', precio: 1500 },
            { id: 8, servicio: 'Psiquiatría', disponibilidad: 'Lun-Vie 9:00-19:00', precio: 850 }
        ];
    });

    // Función para navegar a la página de agendar
    $scope.navigateToAgendar = function() {
        $scope.$parent.navigateTo('views/agendar.html');
    };
});