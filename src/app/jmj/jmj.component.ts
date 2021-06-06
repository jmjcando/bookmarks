import { Component, OnInit } from '@angular/core';

import { jmjFolder, jmjBookmark } from '../data/jmj-folder';

import jmj_data from '../../assets/jmj.data.json';

@Component({
  selector: 'app-jmj',
  templateUrl: './jmj.component.html',
  styleUrls: ['./jmj.component.css']
})
export class JmjComponent implements OnInit {

  data : jmjFolder[] = jmj_data;

  constructor() { }

  ngOnInit(): void {
  }


  public openMultiUrls(urls?: string[]) {
    return ;
  }
}

