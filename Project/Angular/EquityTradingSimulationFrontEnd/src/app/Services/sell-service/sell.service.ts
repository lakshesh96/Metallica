import { Injectable } from '@angular/core';
import {Sellmodel} from '../../Models/sell';

@Injectable()
export class SellService {

  constructor() { }
  sell:Sellmodel;

  Add(s:Sellmodel){
    console.log(s);
}

}
