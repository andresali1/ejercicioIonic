import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.page.html',
  styleUrls: ['./lenguaje.page.scss'],
})
export class LenguajePage implements OnInit {

  listaPaises = [];
  idioma: string;
  nombre: string;

  constructor(
    private service: ApiService,
    private ruta: ActivatedRoute,
    private route: Router
  ) {
    this.idioma = ruta.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerLenguaje(this.idioma);
  }

  obtenerLenguaje(lang: string) {
    this.service.obtenerInfoPorLeng(lang).subscribe({
      next: (resp: any) => {
        this.listaPaises = resp;
      }
    });
  }

  detallePais(name: string) {
    this.nombre = name;
    this.route.navigateByUrl(`/detalle/${this.nombre}`);
  }

}
