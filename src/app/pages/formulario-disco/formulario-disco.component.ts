import { Component, OnInit } from '@angular/core';
import { DiscoService } from 'src/app/shared/disco.service';
import { Disco } from '../../model/disco';

@Component({
  selector: 'app-formulario-disco',
  templateUrl: './formulario-disco.component.html',
  styleUrls: ['./formulario-disco.component.scss']
})
export class FormularioDiscoComponent implements OnInit {
  public list : any[] = [];

  constructor(public discoService: DiscoService ) { }

   // Metodo del controlador que crea un disco invocando el metodo del servicio
    public crear(titulo: string, interprete: string, anyoPublicacion: string) {
      let disco = new Disco(titulo, interprete, Number(anyoPublicacion),0);
      this.discoService.addDisco(disco).subscribe((data) =>
      {
        console.log(data);
        console.log("Disco guardado correctamente!");    
      });
    }

   // Metodo del controlador que llama al metodo del servicio para encontrar una ciudad por su codigo
    public obtenerDisco(id: string) {
      this.discoService.obtenerDisco(Number(id)).subscribe((data) => 
      {
        this.list = data[0];
        console.log(data);        
      });
    }

    // Metodo para eliminar datos por el id del disco
    public eliminarDisco(_id: string) {
      this.discoService.eliminarDisco(Number(_id)).subscribe((data) => 
      {
        console.log(data);
        console.log(`Disco con ${_id} borrado correctamente!`);               
      });
    }

    // Metodo del controlador que crea un disco invocando el metodo del servicio
    public actualizarDisco(titulo: string, interprete: string, anyoPublicacion: string, ide: string) {
      let disco = new Disco(titulo, interprete, Number(anyoPublicacion), Number(ide));
      this.discoService.actualizaDisco(disco).subscribe((data) =>
      {
        console.log(data);
        console.log("Disco actualizado correctamente!");    
      });
    }


    //  public obtenerDiscos() 
    // {
    //   this.discoService.obtenerDiscos().then((data) => {
    //     this.list = data[0];
    //     console.log(data);        
    //   }).catch((err) => {
    //     console.log(err);        
    //   })
    // }

    // Metodo del controlador que llama al metodo del servicio para encontrar una ciudad por su codigo
    // public obtenerDiscos() 
    // {
    //   this.discoService.obtenerDiscos().subscribe((data) => {
    //     this.list = data[0];
    //     console.log(data);        
    //   });
    // }

  ngOnInit(): void {
  }

}
