import { Component } from '@angular/core';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stack } from './sections/stack/stack';
import { About } from './sections/about/about';
import { Offline } from './sections/offline/offline';
import { Contact } from './sections/contact/contact';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Projects, Stack, Offline, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
