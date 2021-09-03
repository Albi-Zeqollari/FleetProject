import { CompanyConfiguration } from "./CompanyConfig";
import { VehicleServices } from "./VehicleService";

export {CompanyConfiguration}
export{VehicleServices}




export class VehicleConfiguration{
    
    id?:String
    vehicleName?:String
    company?:CompanyConfiguration
    vehicleServices?:VehicleServices[];
    consumption?:number
    vehicleEngine?:number
    
}

