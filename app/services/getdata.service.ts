import { Injectable } from '@angular/core';
let index=[];
let i=0
@Injectable()
export class GetdataService {

  constructor() { }

  setdata(key,li){
    index.push(li);
    console.log(li,index);
    
    window.localStorage.setItem(key,JSON.stringify(index));

    
  }

  get(key,li){

    var k=window.localStorage.getItem(key);
    for(i=0;i<JSON.parse(k).length;i++){
        li.push(JSON.parse(k)[i]);
    }

  }

  deledata(key){

    window.localStorage.removeItem(key);
    
  }
}
