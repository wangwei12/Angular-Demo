import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';
import {GetdataService} from '../../services/getdata.service'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  item='';
  constructor(private getdata:GetdataService) { }
  @Input() listart
  ngOnInit() {
    
  }
  add(e){
   if(e.keyCode == 13){
    this.listart.push(this.item);
    this.getdata.setdata(this.item);
    this.item='';
   }
  }

}
