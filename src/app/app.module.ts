import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { RouterModule }  from '@angular/router';

import { AppComponent }  from './app.component';

RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
])

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
   ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroesComponent,
   ],
   providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
