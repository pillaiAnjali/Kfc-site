import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
   Locate() {
     window.location.href = "https://restaurants.kfc.co.in/"
  }
}
