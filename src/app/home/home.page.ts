import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Plugins} from '@capacitor/core';
const { Geolocation, Network } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http: HttpClient) {}

  async getNetwork(){
    const status = await Network.getStatus();
    console.log('status : ' + status);
    return status;
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }
  
  ionViewWillEnter(){
    this.getNetwork();
    this.getCurrentPosition();
    console.log('ui');
    // const URL= 'https://api.chucknorris.io/jokes/random';
    const URL= 'https://wordpress-learning.com/wp-json/wp/v2/posts/';
    this.http.get(URL).subscribe((data) => {
      console.log(data);
    })
  }

}
