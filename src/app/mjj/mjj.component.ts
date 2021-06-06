import { Component, OnInit } from '@angular/core';

import { DataService } from '../data/data.service';

@Component({
  selector: 'app-mjj',
  templateUrl: './mjj.component.html',
  styleUrls: ['./mjj.component.css']
})
export class MjjComponent implements OnInit {

  data:any ;

  constructor(private dataService: DataService) {
    this.data = this.dataService.data.mjj;
  }

  ngOnInit(): void {
  }

}
