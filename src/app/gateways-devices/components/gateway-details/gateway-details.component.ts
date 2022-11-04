import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatewayModel } from '../../models/gateway.model';

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.css']
})
export class GatewayDetailsComponent implements OnInit {
  gateway!: GatewayModel;

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.gateway = this.activatedRoute.snapshot.data['gateway'];
  }

  ngOnInit(): void {
    console.log(this.gateway);
  }

}
