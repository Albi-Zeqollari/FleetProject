package springboot.fleetmanagment.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import springboot.fleetmanagment.models.CompanyConfiguration;

public interface CompanyConfigurationRepository extends MongoRepository<CompanyConfiguration,String> {



}
