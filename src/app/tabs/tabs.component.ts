import { Component, OnInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tabsArray = [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab: TabComponent) {
    this.tabsArray.push(tab);
    if (this.tabsArray.length == 1) {
      this.select(tab);
    }
  }

  select(tab: TabComponent) {
    this.tabsArray.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

}
