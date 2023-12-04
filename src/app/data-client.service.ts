import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {

  private clientesDataSubject = new Subject<any>();
  clientesData$ = this.clientesDataSubject.asObservable();

  enviarDatos(clientesData: any) {
    this.clientesDataSubject.next(clientesData);
  }

  constructor() { }
}
