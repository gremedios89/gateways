import { Component, OnInit, ViewChild } from '@angular/core';
import { GatewayModel } from '../../models/gateway.model';
import { GatewayService } from '../../services/gateway.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { GatewayCreateComponent } from '../gateway-create/gateway-create.component';

@Component({
  selector: 'app-gateways-list',
  templateUrl: './gateways-list.component.html',
  styleUrls: ['./gateways-list.component.css']
})
export class GatewaysListComponent implements OnInit {
  displayedColumns: string[] = ['serial_number', 'name', 'address_IPv4', 'devices', 'actions'];
  dataSource: any;
  gatewayData!: GatewayModel[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private gatewayService: GatewayService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadAllGateways();
  }

  loadAllGateways(): void {
    this.gatewayService.getAllGateways().subscribe((gateways: GatewayModel[]) => {
      this.gatewayData = gateways;
      this.dataSource = new MatTableDataSource<GatewayModel>(this.gatewayData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  addGateway(): void {
    const _popup = this.dialog.open(GatewayCreateComponent, {
      data: {
        id: this.gatewayData.length + 1
      }
    });
    _popup.afterClosed().subscribe(r => {
      this.loadAllGateways();
    });
  }

  deleteGateway(id: number): void {
    this.gatewayService.deleteGateway(id).subscribe(resp => {
      this.loadAllGateways();
    });
  }


}
