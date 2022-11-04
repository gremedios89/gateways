import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewaysDevicesRoutingModule } from './gateways-devices-routing.module';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from '../shared/material/material.module';
import { GatewayDetailsComponent } from './components/gateway-details/gateway-details.component';
import { GatewayCreateComponent } from './components/gateway-create/gateway-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GatewaysListComponent,
    GatewayDetailsComponent,
    GatewayCreateComponent
  ],
  imports: [
    CommonModule,
    GatewaysDevicesRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialModule],
})
export class GatewaysDevicesModule { }
