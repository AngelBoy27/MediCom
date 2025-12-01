app.controller('NosotrosController', function($scope) {
    console.log('NosotrosController cargado');
    
    // Estadísticas del centro médico
    $scope.stats = [
        { value: '20+', label: 'Años de experiencia' },
        { value: '50+', label: 'Médicos especialistas' },
        { value: '10,000+', label: 'Pacientes satisfechos' }
    ];

    // Misión, Visión y Valores del centro médico
    $scope.misionVision = [
        {
            titulo: 'Misión',
            descripcion: 'Proporcionar atención médica integral de la más alta calidad, centrada en el paciente y su familia, utilizando tecnología avanzada y personal altamente calificado.'
        },
        {
            titulo: 'Visión',
            descripcion: 'Ser el centro médico líder en la región, reconocido por nuestra excelencia en atención, innovación tecnológica y compromiso con la salud de la comunidad.'
        },
        {
            titulo: 'Valores',
            descripcion: 'Calidad, Compromiso, Empatía, Profesionalismo, Innovación y Trabajo en equipo son los pilares fundamentales de nuestra institución.'
        }
    ];
});