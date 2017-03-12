import angular from 'angular';
import { appList } from './app-list/app-list.component';
import { appCompare } from './app-compare/app-compare.component';

let components = angular
    .module('components', [])
    .component(appCompare.selector, new appCompare())
    .component(appList.selector, new appList());

export default components.name;
