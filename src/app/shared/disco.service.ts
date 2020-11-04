import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Disco } from '../model/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {

  private url = "http://localhost:1100/discos"
  constructor(private http: HttpClient) {  }

  obtenerDiscos(){
    return this.http.get(this.url);
  }

  obtenerDisco(id:number){
    return this.http.get(this.url+"/"+id);
  }

  addDisco(newDisco: Disco){
    return this.http.post(this.url, newDisco)
  }

  actualizaDisco( newDisco: Disco){
    return this.http.put(`${this.url}`, newDisco)
  }

  eliminarDisco(id:Number)
  {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id:id} };
    return this.http.delete(this.url, httpOptions);
  }

}
