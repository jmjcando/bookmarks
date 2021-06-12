import { Injectable } from '@angular/core';

import { jmjFolder } from '@app-data/jmj-folder.interface';
import { jmjBookmark } from '@app-data/jmj-bookmark.interface';

import jmjData from '@assets/data.jmj.json';
import mockData from '@assets/data.mock.json';
import mjjData from '@assets/data.mjj.json';

//import { mjjFolder, mjj_Bookmark } from '../data/mjj-folder';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = {}


  constructor() {

    this.data = {
      jmj: jmjData,
      mjj: mjjData,
      mock: mockData
    };

    this.fixData(this.data.jmj);
    console.log("jmj", this.data.jmj);
    this.fixData(this.data.mock);

  }


  private fixData(folders: jmjFolder[]) {

    folders.forEach(folder => {

      folder.bkmrks.forEach(bkmrk => {

        this.fixBookmark(bkmrk);

      });

    });

  }


  private fixBookmark(bkmrk: jmjBookmark): void {


    switch (bkmrk.type) {

      case 'multi-urls':
        if (!bkmrk.urls)
          break;

        for (let idx in bkmrk.urls) {
          bkmrk.urls[idx] = this.fixUrl(bkmrk.urls[idx] );
        }

        break;

      case 'separator':
        break;

      default:

        //fix title
        if (!bkmrk.title) { 
          bkmrk.title = bkmrk.url;
        }

        //fix url
        bkmrk.url = bkmrk.url && this.fixUrl(bkmrk.url);

        break;
    }


    

    return;
  }


  //**********************************************
  private fixUrl(url: string | undefined) : string {

    var prefix = (url && !url.match(/^http/i)) ? "http://" : "";
    return (prefix + url);
  }


}
