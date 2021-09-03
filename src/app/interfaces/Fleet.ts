import { VehicleConfiguration } from "./VehicleConfig";

export class CompanyConfiguration{}

export class VehicleServices{}

export class Fleet{

    id?:String
    name?:String
    companyArray?:CompanyConfiguration
    vehicles?:VehicleConfiguration[];
}