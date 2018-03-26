import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http,Jsonp} from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css'],

})
export class GoodslistComponent implements OnInit {

  constructor(public _activeRouter:ActivatedRoute ,public http:Http, public jsonp:Jsonp) { 

  }
  listsimg=[];
  liststitle=[];
  @Input() 
  ngOnInit() {
    // this._activeRouter.queryParams.subscribe(data=>{
    //   console.log(data);
    // })

    this.jsonp.get("http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK").subscribe(data=>{

      // console.log(JSON.parse(data['_body']));
      console.log(JSON.parse(JSON.stringify(data['_body'])));
      var datas=JSON.parse(JSON.stringify(data['_body']));
      for(var i=0;i<datas.length;i++){
        this.listsimg.push(datas[i].goodsListImg);
        this.liststitle.push(datas[i]['2']);
      }
      console.log(this.liststitle);
    },err=>{
      console.log(err);
    })
  }
}
