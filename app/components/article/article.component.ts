import { Component, OnInit ,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  item='';
  constructor() { }
  @Input() listart
  ngOnInit() {
  }
  add(e){
   if(e.keyCode == 13){
    this.listart.push(this.item);
    this.item="";
   }
  }

}
