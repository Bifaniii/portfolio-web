import { Component } from '@angular/core';
import { PATH } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly path = PATH;
}
