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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin("http://localhost:4200")
@RestController
public class CompanyConfigurationController {

    @Autowired
    CompanyConfigurationRepository companyConfigurationRepository;
    @Autowired
    private VehicleConfiguration1Repository vehicleConfiguration1Repository;

    @Autowired
    private VehicleFleetRepository vehicleFleetRepository;



    //get all companies
    @GetMapping("/company")
    public List<CompanyConfiguration> getAllInfo(){


        return companyConfigurationRepository.findAll();
    }

    @PostMapping("/company")
    public CompanyConfiguration createCompany(@RequestBody CompanyConfiguration companyConfiguration){

        return companyConfigurationRepository.save(companyConfiguration);
    }

    //get companies by id
    @GetMapping("/company/{id}")
    public ResponseEntity<CompanyConfiguration> getCompanyById(@PathVariable String id){

      CompanyConfiguration companyConfiguration = companyConfigurationRepository.findById(id).orElseThrow();

      return ResponseEntity.ok(companyConfiguration);

}

    @PutMapping("/company/{id}")
    public ResponseEntity<CompanyConfiguration> updateCompany(@PathVariable String id,@RequestBody CompanyConfiguration companyDetails){

        CompanyConfiguration companyConfiguration= companyConfigurationRepository.findById(id).orElseThrow();

        CompanyConfiguration updatedCompany = companyConfigurationRepository.save(companyConfiguration);

        List<VehicleConfiguration1> vehiclesThatNeedUpdate = vehicleConfiguration1Repository.findVehiclesByCompanyId(id);
        for(VehicleConfiguration1 vehiclesResult: vehiclesThatNeedUpdate) {
            vehiclesResult.setCompany(companyConfiguration);
        }
        vehicleConfiguration1Repository.saveAll(vehiclesThatNeedUpdate);



       List<VehicleFleet> vehiclesThatNeedUpdate1 = vehicleFleetRepository.findVehiclesByCompanyId1(id);
      for(VehicleFleet vehiclesResult: vehiclesThatNeedUpdate1) {
           vehiclesResult.setCompanyArray(companyDetails);
       }
        vehicleFleetRepository.saveAll(vehiclesThatNeedUpdate1);

        return ResponseEntity.ok(updatedCompany);
    }

    @DeleteMapping("/company/{id}")
    public ResponseEntity<Map<String ,Boolean>> deleteCompany(@PathVariable String id){

        CompanyConfiguration companyConfiguration = companyConfigurationRepository.findById(id).orElseThrow();

        List<VehicleConfiguration1> vehicles = vehicleConfiguration1Repository.findVehiclesByCompanyId(id);

        if(vehicles.size() == 0){
            companyConfigurationRepository.delete(companyConfiguration);
        }else{
            companyConfigurationRepository.save(companyConfiguration);
        }

        Map<String,Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);
        return  ResponseEntity.ok(response);
    }

}


