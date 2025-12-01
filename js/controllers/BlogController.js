app.controller("BlogController", function($scope, DataService) {
    console.log("BlogController cargado");
    
    // Variable para filtro activo
    $scope.filtroCategoria = null;
    
    // Cargar posts del blog desde JSON
    DataService.getBlogPosts().then(function(data) {
        $scope.blogPosts = data;
        $scope.extraerCategorias();
        console.log("Posts del blog cargados desde JSON:", data);
    }).catch(function(error) {
        console.error("Error al cargar posts del blog, usando datos de respaldo:", error);
        // Datos de respaldo
        $scope.blogPosts = [
            {
                id: 1,
                titulo: "Importancia de los chequeos medicos anuales",
                fecha: new Date("2025-11-15"),
                resumen: "Descubre por que es fundamental realizarte un chequeo medico completo una vez al ano para prevenir enfermedades y mantener tu salud optima.",
                categoria: "Prevencion",
                autor: "Dr. Juan Perez"
            },
            {
                id: 2,
                titulo: "Consejos para una vida saludable",
                fecha: new Date("2025-11-10"),
                resumen: "Tips practicos para mantener un estilo de vida saludable: alimentacion balanceada, ejercicio regular y descanso adecuado.",
                categoria: "Bienestar",
                autor: "Dra. Maria Gonzalez"
            },
            {
                id: 3,
                titulo: "Avances en tratamientos cardiologicos",
                fecha: new Date("2025-11-05"),
                resumen: "Conoce las ultimas innovaciones en el tratamiento de enfermedades cardiovasculares y como pueden mejorar tu calidad de vida.",
                categoria: "Cardiologia",
                autor: "Dr. Carlos Ramirez"
            },
            {
                id: 4,
                titulo: "Nutricion para diferentes etapas de la vida",
                fecha: new Date("2025-11-01"),
                resumen: "Guia completa sobre las necesidades nutricionales desde la infancia hasta la tercera edad.",
                categoria: "Nutricion",
                autor: "Lic. Ana Martinez"
            },
            {
                id: 5,
                titulo: "Salud mental: romper el estigma",
                fecha: new Date("2025-10-28"),
                resumen: "La importancia de cuidar nuestra salud mental y buscar ayuda profesional cuando sea necesario.",
                categoria: "Salud Mental",
                autor: "Dr. Roberto Lopez"
            },
            {
                id: 6,
                titulo: "Pediatria: vacunacion infantil",
                fecha: new Date("2025-10-25"),
                resumen: "Todo lo que necesitas saber sobre el esquema de vacunacion para proteger a tus hijos.",
                categoria: "Pediatria",
                autor: "Dra. Laura Sanchez"
            }
        ];
        $scope.extraerCategorias();
    });
    
    // Extraer categorias unicas
    $scope.extraerCategorias = function() {
        if ($scope.blogPosts && $scope.blogPosts.length > 0) {
            var categoriasSet = new Set();
            $scope.blogPosts.forEach(function(post) {
                categoriasSet.add(post.categoria);
            });
            $scope.categorias = Array.from(categoriasSet).sort();
        }
    };
});