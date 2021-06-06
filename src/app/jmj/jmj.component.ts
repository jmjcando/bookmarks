import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { DataService } from '../data/data.service';
import { jmjFolder } from '../data/jmj-folder';
import { jmjBookmark  } from '../data/jmj-bookmark';

@Component({
  selector: 'app-jmj',
  templateUrl: './jmj.component.html',
  styleUrls: ['./jmj.component.css']
})
export class JmjComponent implements OnInit {

  data: jmjFolder[];
  id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = String(route.snapshot.data.id);
  //  this.id = String(route.data.pipe(map(d => d.id))).toLowerCase();
    this.data = this.dataService.data[this.id];
  }

  ngOnInit(): void {
  }


  public openMultiUrls(urls?: string[]) {
    return ;
  }
}

