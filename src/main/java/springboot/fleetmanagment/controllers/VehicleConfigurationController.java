package springboot.fleetmanagment.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import springboot.fleetmanagment.models.CompanyConfiguration;
import springboot.fleetmanagment.models.VehicleConfiguration1;
import springboot.fleetmanagment.models.VehicleFleet;
import springboot.fleetmanagment.repository.CompanyConfigurationRepository;
import springboot.fleetmanagment.repository.VehicleConfiguration1Repository;
import springboot.fleetmanagment.repository.VehicleFleetRepository;

import java.security.PublicKey;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
public class VehicleConfigurationController {


    @Autowired
    private VehicleConfiguration1Repository vehicleConfiguration1Repository;
    @Autowired
    private CompanyConfigurationRepository companyConfigurationRepository;
    @Autowired
    private VehicleFleetRepository vehicleFleetRepository;

    @CrossOrigin("http://localhost:4200")
    @GetMapping("/vehicles")
    public List<VehicleConfiguration1> getAllVehicles(){

        return vehicleConfiguration1Repository.findAll();

    }
    @PostMapping("/vehicles")
    public  VehicleConfiguration1 createVehicle(@RequestBody VehicleConfiguration1 vehicleConfiguration){


        if(vehicleConfiguration.getCompany().getCompanyName().isEmpty()){
            vehicleConfiguration.getCompany().setCompanyName("none");
        }

        List<CompanyConfiguration> companyList = companyConfigurationRepository.findAll();

        boolean ispresent = false;
        for (CompanyConfiguration a : companyList) {
            if (a.getCompanyName().equalsIgnoreCase(vehicleConfiguration.getCompany().getCompanyName())) {
                ispresent = true;
                break;
            }
        }

            vehicleConfiguration1Repository.save(vehicleConfiguration);

        return null;

    }

    @GetMapping("/vehicles/{id}")
    public ResponseEntity<VehicleConfiguration1> getVehicleById(@PathVariable String id){

        VehicleConfiguration1 vehicleConfiguration = vehicleConfiguration1Repository.findById(id).orElseThrow();

        return ResponseEntity.ok(vehicleConfiguration);
    }


    @PutMapping("/vehicles/{id}")
    public ResponseEntity<VehicleConfiguration1> updateVehicles(@PathVariable String id,@RequestBody VehicleConfiguration1 vehicleDetails){

        VehicleConfiguration1 vehicleConfiguration = vehicleConfiguration1Repository.findById(id).orElseThrow();

        List<VehicleFleet> vehiclesThatNeedUpdate = vehicleFleetRepository.findVehiclesByFleet(id);
        for(VehicleFleet vehiclesResult: vehiclesThatNeedUpdate) {
            vehiclesResult.setName(vehicleDetails.getVehicleName());
        }
       vehicleFleetRepository.saveAll(vehiclesThatNeedUpdate);


        VehicleConfiguration1 updatedVehicle = vehicleConfiguration1Repository.save(vehicleConfiguration);

        return ResponseEntity.ok(updatedVehicle);


    }


    @DeleteMapping("/vehicles/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteVehicles(@PathVariable String id){

        VehicleConfiguration1 vehicleConfiguration = vehicleConfiguration1Repository.findById(id).orElseThrow();

        vehicleConfiguration1Repository.delete(vehicleConfiguration);

        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }



}
