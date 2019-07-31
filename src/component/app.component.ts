import {Component} from "../decors/component";

// @ts-ignore
@Component({
    selector: 'app-hero-component',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class HeroComponent {
    public title = 'JS Fest';

    constructor() {
    }

}
