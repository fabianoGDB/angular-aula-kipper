import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  private apiUrl = "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"

  constructor(private client: HttpClient) { 
    
  }

  getPokemon(): Observable<any>{
    return this.client.get(this.apiUrl);
  }
}
