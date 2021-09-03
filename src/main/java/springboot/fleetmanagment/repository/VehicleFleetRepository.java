package springboot.fleetmanagment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import springboot.fleetmanagment.models.VehicleConfiguration1;
import springboot.fleetmanagment.models.VehicleFleet;

import java.util.List;

public interface VehicleFleetRepository extends MongoRepository<VehicleFleet,String > {

    @Query(value = "{'companyArray.id': ?0}")
    List<VehicleFleet> findVehiclesByCompanyId1(String id);

    @Query(value = "{'name.id': ?0}")
    List<VehicleFleet> findVehiclesByFleet(String id);
}
