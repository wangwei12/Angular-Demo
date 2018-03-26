import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule ,JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { ArticleComponent } from './components/article/article.component';
import { ContentComponent } from './components/content/content.component';
import { GetdataService } from './services/getdata.service';
import { NoPageComponent } from './components/no-page/no-page.component';
import { HomeComponent } from './components/home/home.component';
import { GoodsdetailComponent } from './components/goodsdetail/goodsdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    ArticleComponent,
    ContentComponent,
    NoPageComponent,
    HomeComponent,
    GoodsdetailComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {path:'content',component:ContentComponent},
      {path:'article/:id/:sex',component:ArticleComponent},
      // {path:'',redirectTo:'', pathMatch:"full"},
      {path:'goodslist',component:GoodslistComponent,children:[
        {path:'goodsdetail/:goodsid',component:GoodsdetailComponent}
      ]},
     
      {path:'**',component:NoPageComponent},
      
    ]),
    
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
