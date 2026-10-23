import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Usuario {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css'
})
export class Usuarios implements OnInit {
  usuarios: Usuario[] = [];
  cargando = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (datos) => {
          this.usuarios = datos;
          this.cargando = false;
        },
        error: () => {
          this.error = 'No se pudieron cargar los usuarios.';
          this.cargando = false;
        }
      });
  }
}
