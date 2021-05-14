import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, LoadingController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import {Howl} from 'howler';

@Component({
  selector: 'app-curso-a',
  templateUrl: './curso-a.page.html',
  styleUrls: ['./curso-a.page.scss'],
})
export class CursoAPage implements OnInit {

  messages : any []= [];
  /*messages = [
    {
      user: 'juan',
      createdAT: 1554090856000,
      msg: 'hola'
    },
    {
      user: 'luis',
      createdAT: 1554090956000,
      msg: 'hola que tal'
    },
    {
      user: 'juan',
      createdAT: 1554091056000,
      msg: 'necesito ayuda con un tp'
    }
  ];*/

  currentUser = this.loginSvc.obtenerEmail().split('@')[0];
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;

  constructor(public router : Router, 
    private loginSvc : LoginService,
    private storageSvc : StorageService,
    public loadingController : LoadingController) { }

  ngOnInit() {
    this.storageSvc.ObtenerMensajes("curso-a").subscribe(doc => {
      this.messages=doc;
    });
    setTimeout(()=>{
      this.content.scrollToBottom(0);
    },1500);
  }

  mandarMensaje(){
    this.storageSvc.GuardarMensaje(this.newMsg,this.loginSvc.obtenerEmail().split('@')[0],"curso-a");
    this.newMsg = '';

    setTimeout(()=>{
      this.content.scrollToBottom(0);
    },1500);

  }

  Logout(){
    let sound = new Howl({
      src: ['assets/logout/logout.mp3']
    });
    sound.play();
    this.presentLoading();
    setTimeout(() => {
        this.loginSvc.Logout();
        this.router.navigateByUrl('login');
    }, 3000);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      spinner: 'lines',
      message: 'Saliendo',
      duration: 3000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
