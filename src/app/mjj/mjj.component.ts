import { Component, OnInit } from '@angular/core';

import { mjjData } from '../data/mjj-data';
//import { mjjFolder, mjj_Bookmark } from '../data/mjj-folder';

@Component({
  selector: 'app-mjj',
  templateUrl: './mjj.component.html',
  styleUrls: ['./mjj.component.css']
})
export class MjjComponent implements OnInit {

  data = mjjData

  constructor() { }

  ngOnInit(): void {
  }

}
