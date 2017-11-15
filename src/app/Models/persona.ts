import {Timestamp} from "rxjs/Rx";

export class Persona {
  constructor(
    public apellido: String,
    public cuilCuit: String,
    public dni: number,
    public estado: String,
    public  fechaAlta: String,
    public  fechaBaja: String,
    public fechaNacimiento: String,
    public id: number,
    public nombre: String,
    tipoPersona: Object
  ) { }

}
