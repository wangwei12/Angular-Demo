import { Component, OnInit, Input ,EventEmitter,Output} from '@angular/core';
import {GetdataService} from '../../services/getdata.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listDone=[];
  constructor(private getdata:GetdataService) { 
    

  }
  @Input() list
          
  ngOnInit() {
    this.getdata.get(this.list);
  }
  ngDoCheck() {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
   
    
  }
  deleing(i){
    this.list.splice(i,1);
    this.getdata.deledata(i);
  }
  changeItem(i){
    this.listDone.push(this.list[i]);
    this.list.splice(i,1);
    
  }
  dele(n){
    this.listDone.splice(n,1);
  }
  changeAgain(i){
    this.list.push(this.listDone[i]);
    console.log(this.list);
  }
 
}
