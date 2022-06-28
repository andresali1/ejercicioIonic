import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pais: any;
  nombre: string;

  constructor(
    private service: ApiService,
    private ruta: ActivatedRoute
  ) {
    this.nombre = ruta.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.consultarPais(this.nombre);
  }

  consultarPais(titulo: string) {
    this.service.obtenerInfoPorNombre(titulo).subscribe({
      next: (resp: any) => {
        this.pais = resp;
      }
    });
  }

}
