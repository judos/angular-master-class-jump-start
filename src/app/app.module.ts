import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';

import { ContactsService } from './contacts.service';
import { EventBusService } from './event-bus.service';
import { APP_ROUTES } from './app.routes';
import { API_ENDPOINT } from './app.tokens';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';



// Needs to be an exported function for AOT to work
export function canDeactivate(component) {
  return !component.hasChanges || window.confirm('Navigate away without saving?');
}


@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent,
    ContactsDashboardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
    FormsModule
  ],
  providers: [
    ContactsService,
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' },
    EventBusService,
    // essentially the same:
    // { provide: EventBusService, useClass: EventBusService }
    Title,
    { provide: 'ConfirmNavigationGuard', useValue: canDeactivate }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}

