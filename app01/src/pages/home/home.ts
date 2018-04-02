import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { SubpagePage } from '../subpage/subpage';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Http,Jsonp,RequestOptions,Headers} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public http:Http, public jsonp:Jsonp) {}


  goSub(){
    this.navCtrl.push(SubpagePage,{name:'liu'});
  }

  logins(){
    let headers = new Headers({ 'Access-Control-Allow-Headers':'*'});
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://datainfo.duapp.com/shopdata/userinfo.php",{status:'login',userID:'wangwei',password:'123456789'},options)
    .subscribe(data=>{
        console.log(data);
    },err=>{
      this.presentAlert();
    });
    
   
  }
  presentAlert() {

    let alert = this.alertCtrl.create({
      title: '登陆失败',
      subTitle: '用户名或密码错误',
      buttons: ['确定'],
    
    });
    alert.present();


  }
}
