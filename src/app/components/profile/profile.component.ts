import { Component, Input } from '@angular/core';
import { ContactInterface } from '../../interfaces/contact.interface';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    @Input() currentContact: ContactInterface;

    constructor() {
        this.currentContact = null;
    }
}
