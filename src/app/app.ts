import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonButton, IonIcon, IonRouterOutlet, IonApp } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  person
} from 'ionicons/icons';


@Component({
  selector: 'app-root',
  imports: [
    IonRouterOutlet,
    IonApp
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  constructor() {
    addIcons({
      notificationsOutline,
      person
    });
  }

}
