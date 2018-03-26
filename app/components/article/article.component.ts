import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  item='';
  constructor(private getdata:GetdataService,private route :ActivatedRoute) { }
 

  @Input() listart
  ngOnInit() {
    console.log(this.route.snapshot.params);
  }
  add(e){
   if(e.keyCode == 13){
    this.listart.push(this.item);
    this.getdata.setdata('doing',this.item);
    this.item='';
   }
  }

}
