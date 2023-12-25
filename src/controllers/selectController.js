angular.module('myApp').controller('SelectController', function($scope, marvelApiService) {
    $scope.characters = [];
    $scope.favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    function updateFavorites() {
        $scope.characters.forEach(char => {
            char.isFavorite = $scope.favorites.includes(char.id);
        });
    }

    $scope.toggleFavorite = function(character) {
        if ($scope.favorites.includes(character.id)) {
            $scope.favorites = $scope.favorites.filter(id => id !== character.id);
        } else {
            $scope.favorites.push(character.id);
        }
        localStorage.setItem('favorites', JSON.stringify($scope.favorites));
        updateFavorites();
    };

    marvelApiService.getCharacterList().then(function(response) {
       // $scope.characters = response.data.results;
    });
});