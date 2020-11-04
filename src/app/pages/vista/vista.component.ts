import { Component, OnInit } from '@angular/core';
import { Disco } from '../../model/disco';
import { DiscoService } from '../../shared/disco.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.scss']
})
export class VistaComponent implements OnInit {

  public discos: Disco[] = [];
  public disco: Disco;
  // public discos: string;

constructor(public discoService: DiscoService){
  this.discos = null;
 }
public obtenerDiscos() 
    {
      this.discoService.obtenerDiscos().subscribe((data:Disco[]) => {
        this.discos = data;
        console.log(data);   
        console.log(this.discos);
        this.disco = null;
      });
    }

    public obtenerDisco(id: string) {
      this.discoService.obtenerDisco(Number(id)).subscribe((data) => 
      {
        this.disco = data[0];
        console.log(data);   
        console.log(this.discos);  
        this.discos = null;           
      });
    }

// public mostrarDisco(id: number)
//   {
//     this.discoService.obtenerDisco(id).subscribe((data:any[]) => {
//       this.mostrarDisco = data[0];
//       console.log(data);      
//     })
//   }

  ngOnInit(): void {
  }

}
