import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact: Contact;

  constructor(private router: Router,
    private contactsService: ContactsService,
    private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.paramMap.get('id'))
      .subscribe(contact => this.contact = contact);
  }

  private navigateToEditor(contact: Contact) {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // or use this.router.navigate(['/contact', contact.id, 'edit']);
  }

  private navigateToList() {
    this.router.navigate(['/']);
  }
}
