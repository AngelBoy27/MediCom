app.controller('ServiciosController', function($scope, DataService) {
    console.log('ServiciosController cargado');
    
    // Servicios principales con descripción extendida
    $scope.serviciosPrincipales = [
        {
            id: 1,
            nombre: 'Urgencias',
            descripcion: 'Atención inmediata las 24 horas del día, los 7 días de la semana para emergencias médicas. Contamos con personal altamente capacitado y equipamiento de última generación.',
            icon: '🚨'
        },
        {
            id: 2,
            nombre: 'Imagenología',
            descripcion: 'Estudios de diagnóstico por imagen: rayos X, ultrasonido, tomografía y resonancia magnética. Tecnología de vanguardia para diagnósticos precisos.',
            icon: '📋'
        },
        {
            id: 3,
            nombre: 'Laboratorio',
            descripcion: 'Análisis clínicos completos con tecnología de vanguardia y resultados rápidos. Contamos con más de 200 estudios disponibles.',
            icon: '🔬'
        },
        {
            id: 4,
            nombre: 'Medicina General',
            descripcion: 'Consulta general para diagnóstico, tratamiento y prevención de enfermedades. Primera línea de atención para toda la familia.',
            icon: '🩺'
        }
    ];

    // Cargar especialidades desde el servicio HTTP
    DataService.getServicios().then(function(data) {
        $scope.especialidades = data;
        console.log('Servicios cargados desde JSON:', data);
    }).catch(function(error) {
        console.error('Error al cargar servicios, usando datos de respaldo:', error);
        // Datos de respaldo
        $scope.especialidades = [
            { nombre: 'Neurología', horario: 'Lun-Vie 9:00-18:00', precio: 800 },
            { nombre: 'Traumatología y Ortopedia', horario: 'Lun-Sáb 8:00-20:00', precio: 750 },
            { nombre: 'Cardiología', horario: 'Lun-Vie 10:00-19:00', precio: 900 },
            { nombre: 'Pediatría', horario: 'Lun-Sáb 8:00-18:00', precio: 650 },
            { nombre: 'Nutrición', horario: 'Lun-Vie 9:00-17:00', precio: 550 },
            { nombre: 'Cirugía Maxilofacial', horario: 'Mar-Jue 10:00-16:00', precio: 1200 },
            { nombre: 'Cirugía Plástica', horario: 'Lun-Vie 11:00-17:00', precio: 1500 },
            { nombre: 'Psiquiatría', horario: 'Lun-Vie 9:00-19:00', precio: 850 }
        ];
    });
});