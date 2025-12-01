app.controller('ContactoController', function($scope, $timeout, $sce) {
    console.log('ContactoController cargado');

    // Información de contacto del centro médico
    $scope.contactInfo = {
        telefonos: [
            '+52 55 1234 5678', 
            '+52 55 8765 4321'
        ],
        emails: [
            'contacto@centromedico.com', 
            'citas@centromedico.com'
        ],
        direccion: 'Av. Principal 123, Col. Centro, Ciudad de Mexico, 06000',
        horarios: [
            'Lunes a Viernes: 8:00 - 20:00',
            'Sabados: 9:00 - 14:00',
            'Urgencias 24/7'
        ]
    };

    // Modelo del formulario
    $scope.formContacto = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };

    $scope.contactSuccess = false;

    // Función para enviar el formulario (simulado)
    $scope.enviarContacto = function() {
        // Validación mínima
        if (!$scope.formContacto.nombre || !$scope.formContacto.email || !$scope.formContacto.mensaje) {
            // mostrar un error sencillo (puede mejorarse)
            alert('Por favor completa los campos requeridos: nombre, correo y mensaje.');
            return;
        }

        // Simular envío y mostrar mensaje de éxito
        $scope.contactSuccess = true;

        // Aquí podrías usar DataService.enviarCita o un endpoint real
        $timeout(function() {
            $scope.contactSuccess = false;
            $scope.formContacto = { nombre: '', email: '', telefono: '', mensaje: '' };
        }, 4000);
    };

    // Función para codificar la dirección y usarla en el iframe (safe URL)
    $scope.encodeURIComponent = function(text) {
        return encodeURIComponent(text);
    };

    // Exponer URL de mapa (opcional si se quiere usar $sce)
    $scope.getMapUrl = function() {
        var url = 'https://maps.google.com/maps?q=' + encodeURIComponent($scope.contactInfo.direccion) + '&output=embed';
        return $sce.trustAsResourceUrl(url);
    };
});