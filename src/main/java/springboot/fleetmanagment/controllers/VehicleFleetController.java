package springboot.fleetmanagment.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import springboot.fleetmanagment.models.VehicleFleet;
import springboot.fleetmanagment.repository.VehicleFleetRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin("http://localhost:4200")
@RestController
public class VehicleFleetController {

    @Autowired
    private VehicleFleetRepository vehicleFleetRepository;


    @GetMapping("/fleet")
    public List<VehicleFleet> getAllFleets(){

        return vehicleFleetRepository.findAll();
    }

    @PostMapping("/fleet")
    public VehicleFleet createFleet( @RequestBody VehicleFleet vehicleFleet){
        return vehicleFleetRepository.save(vehicleFleet);
    }


    @GetMapping("/fleet/{id}")
    public ResponseEntity<VehicleFleet> getById(@PathVariable String id){

        VehicleFleet vehicleFleet = vehicleFleetRepository.findById(id).orElseThrow();

        return ResponseEntity.ok(vehicleFleet);

    }

    @PutMapping("/fleet/{id}")
    public ResponseEntity<VehicleFleet> updateFleet(@PathVariable String id,@RequestBody VehicleFleet fleetDetails){

        VehicleFleet vehicleFleet =vehicleFleetRepository.findById(id).orElseThrow();

        VehicleFleet updatedFleet = vehicleFleetRepository.save(vehicleFleet);

        return  ResponseEntity.ok(updatedFleet);

    }

    @DeleteMapping("/fleet/{id}")
    public  ResponseEntity<Map<String,Boolean>> deleteFleet(@PathVariable String id){

        VehicleFleet vehicleFleet = vehicleFleetRepository.findById(id).orElseThrow();

        vehicleFleetRepository.delete(vehicleFleet);

        Map<String,Boolean> response = new HashMap<>();

        response.put("deleted",Boolean.TRUE);

        return ResponseEntity.ok(response);
    }




}
