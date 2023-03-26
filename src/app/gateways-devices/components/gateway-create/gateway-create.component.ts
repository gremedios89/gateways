import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GatewayModel } from '../../models/gateway.model';
import { GatewayService } from '../../services/gateway.service';

@Component({
  selector: 'app-gateway-create',
  templateUrl: './gateway-create.component.html',
  styleUrls: ['./gateway-create.component.css']
})
export class GatewayCreateComponent implements OnInit {

  gateways!: GatewayModel[];

  constructor(private builder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: number, private dialog: MatDialog, private service: GatewayService) {}

  gateway = this.builder.group({
    serialNumber: this.builder.control('', Validators.required),
    name: this.builder.control('', Validators.required),
    ipv4Address: this.builder.control('', [Validators.required, Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")]),
    devices: this.builder.array([]),
  });

  ngOnInit(): void {
    this.getAllGateways();
  }

  getAllGateways(): void {
    this.service.getAllGateways().subscribe(resp => {
      this.gateways = resp;
    });
  }

  saveGateway(): void {
    if (this.gateway.valid) {
      this.service.createGateway(this.gateway.value).subscribe(resp => {
        this.closePopup();
      });
    }
  }

  closePopup(): void {
    this.dialog.closeAll();
  }

  get devicesForms() {
    return this.gateway.get('devices') as FormArray;
  }

  get serialNumber() {
    return this.gateway.get('serialNumber');
  }
  get ipv4Address() {
    return this.gateway.get('ipv4Address');
  }

  get name() {
    return this.gateway.get('name');
  }

  addDevice() {
    if (this.devicesForms.length < 10) {
      const device = this.builder.group({
        uid: '',
        vendor: '',
        dateCreated: '',
        status: true,
      });
      this.devicesForms.push(device);
    }
  }

  deleteDevice(i: number) {
    this.devicesForms.removeAt(i)
  }

}
