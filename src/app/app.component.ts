import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService],
})

export class AppComponent {
  title = 'Tour of Heroes';

  heroes: Hero[];


  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
