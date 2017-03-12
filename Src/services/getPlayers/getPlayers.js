export class GetPlayers {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    getPlayersList() {
        return this.$http.get('./../data/players.json').then(response => response.data.players);
    }
}

GetPlayers.$inject = ['$http', '$q'];