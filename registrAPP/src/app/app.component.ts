import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
    { title: 'Ingreso', url: '/ingresar', icon: 'arrow-forward-circle' },
    { title: 'Restablecer', url: '/reestablecer', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },

  ];
  public labels = ['Sobre nosotros'];
  constructor() {}
}
