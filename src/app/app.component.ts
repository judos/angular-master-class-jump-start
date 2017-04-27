import { Component, OnInit } from '@angular/core';
import { EventBusService } from './event-bus.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'trm-contacts-app',
  template: `
    <md-toolbar color="primary">{{title}}</md-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {

  private title = "Initial Title";

  constructor(private eventBusService: EventBusService,
    private titleService: Title) {

  }

  ngOnInit() {
    this.eventBusService.observe('appTitleChange')
      .subscribe(title => {
        this.title = title
        this.titleService.setTitle("ContactList - " + title);
      });
  }


}
