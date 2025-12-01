app.service('DataService', function($http, $q) {
    
    // Obtener especialidades desde JSON
    this.getEspecialidades = function() {
        return $http.get('data/especialidades.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error en HTTP request de especialidades:', error);
                return $q.reject(error);
            });
    };

    // Obtener servicios desde JSON
    this.getServicios = function() {
        return $http.get('data/servicios.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error en HTTP request de servicios:', error);
                return $q.reject(error);
            });
    };

    // Obtener posts del blog desde JSON
    this.getBlogPosts = function() {
        return $http.get('data/blog.json')
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error en HTTP request de blog:', error);
                return $q.reject(error);
            });
    };

    // Simular envío de cita (POST request)
    this.enviarCita = function(citaData) {
        // Aquí podrías hacer un POST a tu backend
        return $http.post('/api/citas', citaData)
            .then(function(response) {
                return response.data;
            })
            .catch(function(error) {
                console.error('Error al enviar cita:', error);
                return $q.reject(error);
            });
    };
});