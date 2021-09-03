package springboot.fleetmanagment.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor()
public class VehicleConfiguration1 {


    @Id
    private String id;
    @NotNull
    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    private String vehicleName;
    @NotNull
    private CompanyConfiguration company;
    @NotNull
    private List<VehicleServices> vehicleServices;
    @NotNull
    private Integer consumption;
    @NotNull
    private Integer vehicleEngine;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getVehicleName() {
        return vehicleName;
    }

    public void setVehicleName(String vehicleName) {
        this.vehicleName = vehicleName;
    }

    public CompanyConfiguration getCompany() {
        return company;
    }

    public void setCompany(CompanyConfiguration company) {
        this.company = company;
    }

    public List<VehicleServices> getVehicleServices() {
        return vehicleServices;
    }

    public void setVehicleServices(List<VehicleServices> vehicleServices) {
        this.vehicleServices = vehicleServices;
    }

    public Integer getConsumption() {
        return consumption;
    }

    public void setConsumption(Integer consumption) {
        this.consumption = consumption;
    }

    public Integer getVehicleEngine() {
        return vehicleEngine;
    }

    public void setVehicleEngine(Integer vehicleEngine) {
        this.vehicleEngine = vehicleEngine;
    }
}
