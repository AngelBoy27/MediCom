// Filtro para capitalizar texto
app.filter('capitalize', function() {
    return function(input) {
        if (!input) return '';
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    };
});

// Filtro para truncar texto
app.filter('truncate', function() {
    return function(text, length, suffix) {
        if (!text) return '';
        length = length || 100;
        suffix = suffix || '...';
        
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length).trim() + suffix;
    };
});

// Filtro para formatear teléfono
app.filter('phone', function() {
    return function(tel) {
        if (!tel) return '';
        
        var value = tel.toString().trim().replace(/^\+/, '');
        
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        
        var country, city, number;
        
        switch (value.length) {
            case 10: // +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;
            case 11: // +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;
            case 12: // +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;
            default:
                return tel;
        }
        
        if (country == 1) {
            country = "";
        }
        
        number = number.slice(0, 3) + '-' + number.slice(3);
        
        return (country + " (" + city + ") " + number).trim();
    };
});

// Filtro para destacar términos de búsqueda
app.filter('highlight', function($sce) {
    return function(text, phrase) {
        if (phrase && text) {
            text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
                '<span class="highlighted">$1</span>');
        }
        return $sce.trustAsHtml(text);
    };
});