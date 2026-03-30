import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    service: string;
    name: string;
    businessType: string;
    email: string;
    message: string;
    phone: string;
}
export interface backendInterface {
    getAllLeads(): Promise<Array<Lead>>;
    getLeadByEmail(email: string): Promise<Lead>;
    submitLead(name: string, email: string, phone: string, businessType: string, service: string, message: string): Promise<void>;
}
