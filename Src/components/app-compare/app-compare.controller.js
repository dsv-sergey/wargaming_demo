import _ from 'underscore';

export class AppCompareController {
    constructor(GetPlayers) {
        this.getPlayers = GetPlayers;
    }

    $onInit() {
        this.getPlayers.getPlayersList().then(
            result => {
                this.players = result;
            }
        );

        this.compareTable = false;
        this.player1 = '';
        this.player2 = '';
    }

    get showCompareTable() {
        return this.compareTable;
    }

    compare() {
        let validPlayer1 = _.find(this.players, (item) => {
            return item.id === this.player1;
        });

        let validPlayer2 = _.find(this.players, (item) => {
            return item.id === this.player2;
        });

        if (validPlayer1 && validPlayer2 && (this.player1 && this.player2) && (this.player1 !== this.player2)) {
            this.compareTable = true;

            this.compared_player1 = _.where(this.players , {id: this.player1})[0];
            this.compared_player2 = _.where(this.players , {id: this.player2})[0];
        } else {
            alert('enter both valid and different player id`s please');
        }
    }

    playersCompare(target, sibling) {
        if (target > sibling) {
            return 'validation-above';
        }

        if (target < sibling) {
            return 'validation-under';
        }

        return 'validation-even';
    }
}

AppCompareController.$inject = ['GetPlayers'];