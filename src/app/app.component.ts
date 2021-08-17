import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuOpened = false;

  listTitles = [{
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões das Galáxias",
    relevance: 98,
    age: 0,
    parts: 2,
    categories:["épico",'filme de fantasia', 'viagem no tempo']
  },
  {
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões das Galáxias 2",
    relevance: 89,
    age: 12,
    parts: 2,
    categories:["épico",'filme de fantasia', 'viagem no tempo']
  },
  {
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões das Galáxias 3",
    relevance: 95,
    age: 14,
    parts: 2,
    categories:["épico",'filme de fantasia', 'viagem no tempo']
  },
  {
    trailer: "assets/videos/trailer_guardioes_da_galaxia_1080p.mp4",
    cover: "assets/images/guardios-da-galaxia.jpg",
    name: "Guardiões das Galáxias 3",
    relevance: 95,
    age: 16,
    parts: 2,
    categories:["épico",'filme de fantasia', 'viagem no tempo']
  }];
  
  setMenuState(state: boolean){
    this.menuOpened = state;
  }
  closeMenu() {
    this.menuOpened = false;
  }
}
