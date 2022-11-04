import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayDetailsComponent } from './components/gateway-details/gateway-details.component';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { GetGatewayByIdResolver } from './resolvers/get-gateway-by-id/get-gateway-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: GatewaysListComponent,
  },
  {
    path: 'detail/:id',
    component: GatewayDetailsComponent,
    resolve: {
      gateway: GetGatewayByIdResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewaysDevicesRoutingModule { }
