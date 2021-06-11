import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { jmjFolder } from '../data/jmj-folder';
import { DataService } from '../data/data.service';


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


  // works well in FF. Opens only one url in chrome
  public openMultiUrls(urls?: string[]) {
    console.log("openMultiUrls", urls);

    urls && urls.forEach((url, index) => {
      let win:string = `win_${index}`;
      console.log("url", url, "win", win);
      window.open(url, win);
    });

    return false;
  }
}

