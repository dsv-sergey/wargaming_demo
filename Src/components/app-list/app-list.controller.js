export class AppListController {
    constructor(GetPlayers) {
        this.getPlayers = GetPlayers;
        this.listTitles = [
            'Id',
            'Name',
            'Battles',
            'Wins',
            'Days',
            'Vehicle',
            'Rating',
            'Exp avg',
            'Exp total',
            'Created'
        ];
    }

    $onInit() {
        this.getPlayers.getPlayersList().then(
            result => {
                this.players = result;
            }
        );
    }
}

AppListController.$inject = ['GetPlayers'];