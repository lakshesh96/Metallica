import { Injectable } from '@angular/core';
import { Regmodel } from "../../Models/regmodel";

@Injectable()
export class ListService {

  constructor() { }

  reg:Regmodel;

  Add(r:Regmodel){
    console.log(r);
  }

}