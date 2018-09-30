import { Component } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
    public cities: Array<string>;
    public isActiveChecked: boolean;

    constructor() {
        this.cities = [
            'Hong Kong',
            'London',
            'Los Angeles',
            'Singapore',
            'Sydney'
        ];

        this.isActiveChecked = true;
    }

    public toggleActiveCheck(): void {
        this.isActiveChecked = !this.isActiveChecked;
    }
}
