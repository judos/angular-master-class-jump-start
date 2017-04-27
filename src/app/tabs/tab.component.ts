import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from './tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent implements OnInit {
  @Input() selected: boolean;
  @Input() title: String;

  constructor(private tabs: TabsComponent<TabComponent>) { }

  ngOnInit() {
  }

}


