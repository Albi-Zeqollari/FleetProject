package springboot.fleetmanagment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import springboot.fleetmanagment.models.VehicleConfiguration1;
import springboot.fleetmanagment.models.VehicleServices;

import java.util.List;

public interface VehicleServicesRepository extends MongoRepository<VehicleServices,String> {


}
