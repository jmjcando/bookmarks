import { Injectable } from '@angular/core';

import { jmjFolder } from '../data/jmj-folder';

import { jmjBookmark } from '../data/jmj-bookmark';

import jmjData from '../../assets/data.jmj.json';
import  mjjData  from '../../assets/data.mjj.json';
//import { mjjFolder, mjj_Bookmark } from '../data/mjj-folder';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = {}


  constructor() {
    this.data = {
      jmj: jmjData,
      mjj: mjjData
    };
  }



}
