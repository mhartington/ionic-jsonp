import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItunesProvider } from '../../providers/itunes/itunes'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public itunes: ItunesProvider) {

  }

  load(){
    this.itunes.load('computer')
    .subscribe(
      res => console.log(res)
    )
  }

}
