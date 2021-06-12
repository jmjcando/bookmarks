import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { jmjFolder } from '@app-data/jmj-folder.interface';
import { DataService } from '@app-data/data.service';


@Component({
  selector: 'app-jmj-detail',
  templateUrl: './jmj-detail.component.html',
  styleUrls: ['./jmj-detail.component.css']
})
export class JmjDetailComponent implements OnInit {

  data: jmjFolder[];
  id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    this.id = String(route.snapshot.data.id);
  //  this.id = String(route.data.pipe(map(d => d.id))).toLowerCase();
    this.data = this.dataService.data[this.id];
  }

  ngOnInit(): void {
  }


  //ToDo:
  // works well in FF. Opens only one url in chrome/edge
  public openMultiUrls(urls?: string[]) {
    console.log("openMultiUrls", urls);

    urls && urls.forEach((url, index) => {
      let win:string = `win_${index}`;
      console.log("url", url, "win", win);
      window.open(url, win);
    });

    return false; // so as javascipt a href does not invoke click.
  }
}

