import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router : Router, public loadingController : LoadingController) {}

  CursoA(){
    setTimeout( () =>{
      this.presentLoading();
      setTimeout(() => {
        this.router.navigateByUrl('curso-a');
      }, 3000);
    },500);
  }
  CursoB(){
    setTimeout( () =>{
      this.presentLoading();
      setTimeout(() => {
        this.router.navigateByUrl('curso-b');
      }, 3000);
    },500);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'lines',
      message: 'Cargando',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }



}
