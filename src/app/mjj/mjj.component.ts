import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mjj',
  templateUrl: './mjj.component.html',
  styleUrls: ['./mjj.component.css']
})
export class MjjComponent implements OnInit {

  public data : any[] = [{
  "name": "Email",
  "bookmarks": [
    { "name": "Yahoo! Mail", href: "https://mail.yahoo.com" },
    { "name": "GMail", href: "https://mail.google.com" },
    { "name": "Google drive", href: "https://drive.google.com" },
    { "name": "Google drive - Nandu", href: "https://drive.google.com/drive/u/0/folders/11kQ5C4-zq5sGUBFINWCzAQmmL1FBNoJB" },
    { "name": "Google", href: "http://www.google.com" },
  ]
}, {
  "name": "Weather",
  "bookmarks":
    [
      { "name": "Weather - Piscataway", href: "http://weather.yahoo.com/forecast/USNJ0409_f.html" },
      //{ "name": "Weather - Mumbai", href: "http://weather.yahoo.com/forecast/INXX0087_f.html" },
      { "name": "World Clock", href: "http://www.timeanddate.com/worldclock/full.html" },
    ]
}
];

  constructor() { }

  ngOnInit(): void {
  }

}
