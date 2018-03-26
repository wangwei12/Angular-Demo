import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-goodsdetail',
  templateUrl: './goodsdetail.component.html',
  styleUrls: ['./goodsdetail.component.css']
})
export class GoodsdetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  
    //  console.log(this.route.snapshot);

     this.route.params.subscribe(data=>{
       console.log(data);
     });
  }

}
