import { Injectable } from '@angular/core';

@Injectable(
  //Provendo aqui não é necessário prover no module
  //{  providedIn: 'root'}
  )
export class CursosService {


  constructor() { }

  getCursos(){
     return ['Java', 'Angular', 'Ext Js']
    }
}
