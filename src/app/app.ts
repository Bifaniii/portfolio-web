import { Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';
import { Journey } from './sections/journey/journey';
import { Contact } from './sections/contact/contact';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Projects, Stack, Journey, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
