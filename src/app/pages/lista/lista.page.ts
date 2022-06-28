import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss']
})
export class ListaPage implements OnInit {

  listPaises = [];
  nombre: string;

  constructor(
    private service: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.consultarTodo();
  }

  consultarTodo() {
    this.service.obtenerInfo().subscribe({
      next: (resp: any) => {
        this.listPaises = resp;
      }
    });
  }

  detallePais(name: string) {
    this.nombre = name;
    this.route.navigateByUrl(`/detalle/${this.nombre}`);
  }

}
