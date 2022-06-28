import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nomIdioma = '';

  constructor(
    private route: Router
  ) {}

  mostrarTodos() {
    this.route.navigateByUrl('/lista');
  }

  buscarRegion(title: string) {
    this.route.navigateByUrl(`/region/${title}`);
  }

  buscarIdioma() {
    this.route.navigateByUrl(`/lenguaje/${this.nomIdioma}`);
    this.nomIdioma = '';
  }

}
