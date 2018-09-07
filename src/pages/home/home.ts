import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public auth: AuthProvider) {

  }

  public log: String = '';

  googleLogin() {
    let page = this;
    this.auth.googleLogin(page.log).then(
      function(res) {
        page.log += 'RESPOSTA: ' + JSON.stringify(res);
      }
    ).catch(
      function(erro) {
        page.log = 'ERRO: ' + JSON.stringify(erro);
      }
    );
  }

}
