import { Component } from '@angular/core';
import { ContactInterface } from './interfaces/contact.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public currentContact: ContactInterface;

    public onContactSelect(contact): void {
        this.currentContact = contact;
    }
}
