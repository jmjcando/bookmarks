import { Injectable } from '@angular/core';

import { jmjFolder } from '../data/jmj-folder';

import { jmjBookmark } from '../data/jmj-bookmark';

import jmj_data from '../../assets/jmj.data.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any = {}


  constructor() {
    this.data.jmj = jmj_data;
  }



}
