import { DeviceModel } from "./device.model";

export interface GatewayModel {
    id: number;
    serialNumber: string;
    name: string;
    ipv4Address: string;
    devices: DeviceModel[]
}
