import { Component } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonIcon,
  IonButton,
  IonCheckbox
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  barbellOutline,
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  arrowForwardOutline,
  logoGoogle
} from 'ionicons/icons';




@Component({
  selector: 'app-login',
   imports: [
    IonContent,
    IonInput,
    IonIcon,
    IonButton,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   constructor() {

        addIcons({
      barbellOutline,
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      arrowForwardOutline,
      logoGoogle
    });

  }


}
