package springboot.fleetmanagment.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springboot.fleetmanagment.models.VehicleConfiguration1;
import springboot.fleetmanagment.models.VehicleServices;
import springboot.fleetmanagment.repository.VehicleConfiguration1Repository;
import springboot.fleetmanagment.repository.VehicleServicesRepository;

import java.util.*;

@CrossOrigin("http://localhost:4200")
@RestController
public class VehicleServicesController {


    @Autowired
    private VehicleServicesRepository vehicleServicesRepository;
    @Autowired
    private VehicleConfiguration1Repository vehicleConfiguration1Repository;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/services")

    public List<VehicleServices> getAllServices(){

        return vehicleServicesRepository.findAll();

    }

    @PostMapping("/services")
    public VehicleServices createService( @RequestBody VehicleServices vehicleServices){

        return vehicleServicesRepository.save(vehicleServices);
    }

    @GetMapping("/services/{id}")
    public ResponseEntity<VehicleServices> getServiceById(@PathVariable String id){

        VehicleServices vehicleServices = vehicleServicesRepository.findById(id).orElseThrow();

        return ResponseEntity.ok(vehicleServices);
    }



    @PutMapping("/services/{id}")
    public ResponseEntity<VehicleServices> updateServices(@PathVariable String id,@RequestBody VehicleServices vehicleServicesDetails){

            VehicleServices vehicleServices = vehicleServicesRepository.findById(id).orElseThrow();

             VehicleServices updatedVehicleService= vehicleServicesRepository.save(vehicleServices);

             return ResponseEntity.ok(updatedVehicleService);


    }

    @DeleteMapping("/services/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteServices(@PathVariable String id){

        VehicleServices vehicleServices = vehicleServicesRepository.findById(id).orElseThrow();

        List<VehicleConfiguration1> vehicleConfigurationList = vehicleConfiguration1Repository.findAll();

        Optional<VehicleServices> vehicleServicesId = vehicleServicesRepository.findById(id);
        for (VehicleConfiguration1 vehicle : vehicleConfigurationList) {
            List<VehicleServices> vehicleServicesList = vehicle.getVehicleServices();
            ListIterator<VehicleServices> itr = vehicleServicesList.listIterator();
            while (itr.hasNext()) {
                if (itr.next().getServiceName().equalsIgnoreCase(vehicleServicesId.get().getServiceName())) {
                    itr.remove();
                }
            }
//
            vehicle.setVehicleServices(vehicleServicesList);
            vehicleConfiguration1Repository.save(vehicle);
        }


        vehicleServicesRepository.deleteById(id);

        Map<String,Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);

        return  ResponseEntity.ok(response);
    }


    }




