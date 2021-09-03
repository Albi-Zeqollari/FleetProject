package springboot.fleetmanagment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.data.mongodb.repository.Query;
import springboot.fleetmanagment.models.VehicleConfiguration1;

import java.util.List;

public interface VehicleConfiguration1Repository extends MongoRepository<VehicleConfiguration1,String> {

    @Query(value = "{'company.id': ?0}")
    List<VehicleConfiguration1> findVehiclesByCompanyId(String id);
}
