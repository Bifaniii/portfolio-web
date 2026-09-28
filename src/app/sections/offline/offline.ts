import { Component } from '@angular/core';
import { BOOKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-offline',
  templateUrl: './offline.html',
  styleUrl: './offline.scss',
})
export class Offline {
  protected readonly books = BOOKS;
}
