import angular from 'angular';
import uiRouter from 'angular-ui-router';

import components from './components/main';
import services from './services/services';

import './style/style.scss';

let appModule = angular
    .module('application',[components, services]);

angular.element(document).ready(() => {
    angular.bootstrap(document, [appModule]);
});
