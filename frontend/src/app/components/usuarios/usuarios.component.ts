import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  registro = false;
  borrado = false;
  existe = false;
  usuario: Usuario;
  public usuarios: Usuario[];

  constructor(private usuarioService: UsuariosService) {

    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.getUsers();
  }



  getUsers(): void{
    this.usuarioService.getUsers().subscribe( res => {
      // this.usuarios = res;
      this.usuarios = res;
    },
    err => console.log(err));
  }



  addUser(form: NgForm): void {


    const existe = this.usuarios.find( usuario => {
      return usuario.nombre === this.usuario.nombre && usuario.apellidos === this.usuario.apellidos;
    });

    // console.log(existe);

    if (!this.usuario._id && existe === undefined) {
      this.usuarioService.postUser(this.usuario).subscribe( res => {
        this.registro = true;
        this.resetForm(form);
        this.getUsers();
        // console.log(res);
      },
      err => {
        console.log(err as any);
        // this.existe = true;
      });
    }else{
      this.usuarioService.putUser(this.usuario).subscribe( res => {
        this.registro = true;
        this.resetForm(form);
        this.getUsers();
        // console.log(res);
      },
      err => {
        console.log(err);
        this.existe = true;
        this.resetForm();
      });
    }

    this.registro = false;
    this.existe = false;
  }



  editUser(usuario: Usuario): void{
    this.usuario = usuario;
  }



  deleteUser(id): void{
    this.usuarioService.deleteUser(id).subscribe( res => {
      console.log(res);
      this.getUsers();
      this.borrado = true;
    },
    err => console.log(err));
    this.borrado = false;
  }



  resetForm(form?: NgForm): void{
    if (form){
      form.reset();
    }
  }


}
