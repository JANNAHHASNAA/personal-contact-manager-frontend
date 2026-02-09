import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contacts.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'], 
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ContactsComponent implements OnInit {
  contacts: any[] = [];
  name = '';
  phone = '';
  email = '';
  message = '';

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contactService.getContacts().subscribe({
      next: (res: any) => this.contacts = res,
      error: err => this.message = 'Error loading contacts'
    });
  }

  addContact() {
    this.contactService.addContact({ name: this.name, phone: this.phone, email: this.email })
      .subscribe({
        next: res => {
          this.message = res.message;
          this.name = this.phone = this.email = '';
          this.loadContacts();
        },
        error: err => this.message = 'Error adding contact'
      });
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id).subscribe({
      next: res => this.loadContacts(),
      error: err => this.message = 'Error deleting contact'
    });
  }

  updateContact(c: any) {
  const updatedData = {
    name: c.name,
    phone: c.phone,
    email: c.email
  };

  this.contactService.updateContact(c.id, updatedData)
    .subscribe({
      next: res => {
        this.message = 'Contact updated successfully!';
        this.loadContacts();
      },
      error: err => {
        console.error(err);
        this.message = 'Error updating contact';
      }
    });
}
}
