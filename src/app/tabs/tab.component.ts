import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit {
  selected = false;
  @Input() title = '';

  constructor(private tabs: TabsComponent) { }

  ngOnInit() {
    this.tabs.addTab(this);
  }

}


