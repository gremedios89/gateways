import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GatewayModel } from '../models/gateway.model';

@Injectable({
  providedIn: 'root'
})
export class GatewayService { 
  urlApi = 'http://localhost:3000/gateways';

  constructor(private readonly http: HttpClient) {
  }

  getAllGateways(): Observable<GatewayModel[]> {
    return this.http.get<GatewayModel[]>(this.urlApi);
  }

  createGateway(gatewayData: GatewayModel) {
    return this.http.post(this.urlApi, gatewayData);
  } 

  deleteGateway(id: any) {
    return this.http.delete(this.urlApi + '/' + id);
  }

  getGatewayById(id: number): Observable<GatewayModel> {
    return this.http.get<GatewayModel>(this.urlApi + '/' + id);
  }
}
