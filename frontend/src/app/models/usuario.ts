export class Usuario {

    _id: string;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: number;
    direccion: string;

    constructor(_id = '', nombre = '', apellidos = '', correo = '', telefono = 0, direccion = ''){

        this._id = _id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
    }

}
