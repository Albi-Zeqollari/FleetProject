//package springboot.fleetmanagment.models;
//
//import com.fasterxml.jackson.annotation.JsonFormat;
//import lombok.*;
//
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.index.Indexed;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.util.ArrayList;
//import java.util.List;
//
//
//@Data
//@Document
//public class VehicleConfiguration {
//
//
//    @Id
//    private String id;
//    @NonNull
//
//    private String vehicleName;
//    @NonNull
//
//    private CompanyConfiguration company;
//    @NonNull
//
//    private  VehicleServices vehicleServices;
//    @NonNull
//    private Integer consumption;
//    @NonNull
//    private Integer vehicleEngine;
//
//
//    public VehicleConfiguration(String id,  String vehicleName,  CompanyConfiguration company, VehicleServices vehicleServices,  Integer consumption,  Integer vehicleEngine) {
//        this.id = id;
//        this.vehicleName = vehicleName;
//        this.company = company;
//        this.vehicleServices = vehicleServices;
//        this.consumption = consumption;
//        this.vehicleEngine = vehicleEngine;
//    }
//
//
//    public VehicleConfiguration(){
//
//    }
//
//}
