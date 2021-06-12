import { Component, OnInit } from '@angular/core';

import { jmjFolder } from '@app-data/jmj-folder.interface';

import { DataService } from '@app-data/data.service';


@Component({
  selector: 'app-jmj-menu',
  templateUrl: './jmj-menu.component.html',
  styleUrls: ['./jmj-menu.component.css']
})
export class JmjMenuComponent implements OnInit {

  data: jmjFolder[] = this.dataService.data.jmj;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
