import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Hero } from '../../core';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selected: Hero;
  heroes$: Observable<Hero[]>;
  loading$: Observable<boolean>;

  constructor(private heroService: HeroService) {
    this.heroes$ = heroService.entities$;
    this.loading$ = heroService.loading$;
  }

  ngOnInit() {
    this.getHeroes();
  }

  add(hero: Hero) {
    this.heroService.add(hero);
  }

  delete(hero: Hero) {
    this.heroService.delete(hero);
    this.close();
  }

  getHeroes() {
    this.heroService.getAll();
    this.close();
  }

  update(hero: Hero) {
    this.heroService.update(hero);
  }

  close() {
    this.selected = null;
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  select(hero: Hero) {
    this.selected = hero;
  }

  // add(hero: Hero) {
  //   this.loading = true;
  //   this.heroService
  //     .add(hero)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(addedHero => (this.heroes = this.heroes.concat(addedHero)));
  // }

  // delete(hero: Hero) {
  //   this.loading = true;
  //   this.close();
  //   this.heroService
  //     .delete(hero)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () => (this.heroes = this.heroes.filter(h => h.id !== hero.id))
  //     );
  // }

  // getHeroes() {
  //   this.loading = true;
  //   this.heroService
  //     .getAll()
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(heroes => (this.heroes = heroes));
  //   this.close();
  // }

  // update(hero: Hero) {
  //   this.loading = true;
  //   this.heroService
  //     .update(hero)
  //     .pipe(finalize(() => (this.loading = false)))
  //     .subscribe(
  //       () =>
  //         (this.heroes = this.heroes.map(h => (h.id === hero.id ? hero : h)))
  //     );
  // }
}
