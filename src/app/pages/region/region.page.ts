import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.page.html',
  styleUrls: ['./region.page.scss'],
})
export class RegionPage implements OnInit {

  listaPaises = [];
  region: string;
  nombre: string;

  constructor(
    private service: ApiService,
    private ruta: ActivatedRoute,
    private route: Router
  ) {
    this.region = ruta.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.obtenerRegion(this.region);
  }

  obtenerRegion(title: string) {
    this.service.obtenerInfoPorRegion(title).subscribe({
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
