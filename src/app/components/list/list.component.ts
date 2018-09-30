import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactInterface } from '../../interfaces/contact.interface';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public contacts: ContactInterface[];
    public currentOrder: any;
    public currentContactId: number;
    @Output() currentContact = new EventEmitter<ContactInterface>();

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.currentOrder = {name: '', order: ''};
        this.http.get<ContactInterface[]>('assets/contacts.json').subscribe(data => {
            this.contacts = data;
        });
    }

    public sort(type): void {
        this.currentOrder = {
            name: type,
            order: this.currentOrder.name !== type ? 'DESC' : (this.currentOrder.order === 'DESC' ? 'ASC' : 'DESC')
        };
        this.contacts.sort((a, b) =>
            (a[type] > b[type])
                ? (this.currentOrder.order === 'ASC' ? -1 : 1) : ((b[type] > a[type])
                ? (this.currentOrder.order === 'ASC' ? 1 : -1) : 0));
    }

    public selectContact(contact): void {
        this.currentContactId = contact.id;
        this.currentContact.emit(contact);
    }
}
