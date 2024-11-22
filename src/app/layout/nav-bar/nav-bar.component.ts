import { Component } from '@angular/core';
import {Link} from '../../../shared/models/link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  links: Link[] = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Pokedex',
      url: '/pokedex'
    },
  ];


}
