import { AppListController } from './app-list.controller';
import template from './app-list.template.html';
import './app-list.scss'

export class appList {
    static get selector() { return 'appList'; }

    constructor() {
        this.controller = AppListController;
        this.template = template;
    }
}
