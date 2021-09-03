package springboot.fleetmanagment.models;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;


@AllArgsConstructor()
@NoArgsConstructor()
@Data
@Document
public class VehicleFleet {

    @Id
    private String id;
    @NotNull
    private String name;
    @NotNull
    private CompanyConfiguration companyArray;
    @NotNull
    private ArrayList<VehicleConfiguration1> vehicles;



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CompanyConfiguration getCompanyArray() {
        return companyArray;
    }

    public void setCompanyArray(CompanyConfiguration companyArray) {
        this.companyArray = companyArray;
    }



    public ArrayList<VehicleConfiguration1> getVehicles() {
        return vehicles;
    }

    public void setVehicles(ArrayList<VehicleConfiguration1> vehicles) {
        this.vehicles = vehicles;
    }
}
