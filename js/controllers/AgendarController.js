app.controller('AgendarController', function($scope, DataService) {
    console.log('AgendarController cargado');
    
    // Modelo del formulario usando ng-model
    $scope.formData = {
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        fecha: '',
        hora: '',
        mensaje: ''
    };

    // Lista de especialidades para ng-options en el select
    $scope.especialidadesLista = [
        'Neurología',
        'Traumatología y Ortopedia',
        'Cardiología',
        'Pediatría',
        'Nutrición',
        'Cirugía Maxilofacial',
        'Cirugía Plástica',
        'Psiquiatría'
    ];

    // Variable para mostrar mensaje de confirmación
    $scope.mensajeConfirmacion = '';

    // Función para validar que todos los campos requeridos estén llenos
    $scope.isFormValid = function() {
        return $scope.formData.nombre && 
               $scope.formData.email && 
               $scope.formData.telefono && 
               $scope.formData.servicio && 
               $scope.formData.fecha && 
               $scope.formData.hora;
    };

    // Función para agendar la cita
    $scope.agendarCita = function() {
        if ($scope.isFormValid()) {
            // Aquí podrías hacer una petición HTTP POST al servidor
            console.log('Cita agendada:', $scope.formData);
            
            // Mostrar mensaje de confirmación
            $scope.mensajeConfirmacion = '¡Cita agendada con éxito! Nos pondremos en contacto contigo pronto.';
            
            // Limpiar el formulario después de 3 segundos
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.formData = {
                        nombre: '',
                        email: '',
                        telefono: '',
                        servicio: '',
                        fecha: '',
                        hora: '',
                        mensaje: ''
                    };
                    $scope.mensajeConfirmacion = '';
                });
            }, 3000);
        } else {
            alert('Por favor, completa todos los campos requeridos (*)');
        }
    };
});