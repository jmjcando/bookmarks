import { Component, OnInit } from '@angular/core';

import { DataService } from '../data/data.service';
import { jmjFolder } from '../data/jmj-folder';
import { jmjBookmark  } from '../data/jmj-bookmark';

@Component({
  selector: 'app-jmj',
  templateUrl: './jmj.component.html',
  styleUrls: ['./jmj.component.css']
})
export class JmjComponent implements OnInit {

  data : jmjFolder[];

  constructor(private dataService: DataService) {
    this.data = this.dataService.data.jmj;
  }

  ngOnInit(): void {
  }


  public openMultiUrls(urls?: string[]) {
    return ;
  }
}

