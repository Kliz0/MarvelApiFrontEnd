angular.module('myApp').factory('marvelApiService', function($http) {
    var baseUrl = 'https://localhost:7142/api/';
    // var apiKey = '';

    return {
        getCharacterList: function() {
            return $http.get(baseUrl + 'characters?apikey=' + apiKey);
        },
        getCharacterDetails: function(characterId) {
            return $http.get(baseUrl + 'characters/' + characterId + '?apikey=' + apiKey);
        }
    };
});