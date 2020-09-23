import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  readonly url = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }


  postUser(usuario: Usuario){
    return this.http.post<Usuario>(this.url + 'user', usuario);
  }

  getUser(id){
    return this.http.get<Usuario>(this.url + 'user' + `/${id}`);
  }

  getUsers(){
    return this.http.get<Usuario[]>(this.url + 'users');
  }

  putUser(usuario: Usuario){
    return this.http.put<Usuario>(this.url + 'user' + `/${usuario._id}`, usuario);
  }

  deleteUser(id){
    return this.http.delete<Usuario>(this.url + 'user' + `/${id}`);
  }


}
