import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GatewayModel } from '../../models/gateway.model';
import { GatewayService } from '../../services/gateway.service';

@Injectable({
  providedIn: 'root'
})
export class GetGatewayByIdResolver implements Resolve<GatewayModel> {
  constructor(private readonly gatewayService: GatewayService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GatewayModel> {
    return this.gatewayService.getGatewayById(Number(route.paramMap.get('id')));
  }
}
