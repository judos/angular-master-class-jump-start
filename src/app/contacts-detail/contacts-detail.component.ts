import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../models/contact';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {

  @Input() contact: Contact;

  @Output() edit = new EventEmitter<void>();

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.emit('appTitleChange', 'Contact details');
  }

}
