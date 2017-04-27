import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  // we need to initialize since we can't use ?. operator with ngModel
  contact: Contact = <Contact>{ address: {} };
  hasChanges: boolean = true;

  constructor(private contactsService: ContactsService,
    private router: Router,
    private route: ActivatedRoute,
    private eventBusService: EventBusService) { }

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.paramMap.get('id'))
      .subscribe(contact => this.contact = contact);
    this.eventBusService.emit('appTitleChange', 'Edit Contact details');
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  save(contact: Contact) {
    this.hasChanges = false;
    this.contactsService.updateContact(contact)
      .subscribe(() => {
        this.goToDetails(contact);
        this.eventBusService.emit('contactUpdated', {});
      });
  }

  private goToDetails(contact: Contact) {
    this.router.navigate(['/contact', contact.id]);
  }
}

