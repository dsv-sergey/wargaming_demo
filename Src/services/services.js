import angular from 'angular';
import { GetPlayers } from './getPlayers/getPlayers';

export default angular
    .module('services', [])
    .service('GetPlayers', GetPlayers).name;