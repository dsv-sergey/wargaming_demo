import { AppCompareController } from './app-compare.controller';
import template from './app-compare.template.html';
import './app-compare.scss';

export class appCompare {
    static get selector() { return 'appCompare'; }

    constructor() {
        this.controller = AppCompareController;
        this.template = template;
    }
}
