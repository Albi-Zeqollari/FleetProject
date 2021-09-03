package springboot.fleetmanagment.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Getter
@Setter
@Data
@Document
public class VehicleServices {

    @Id
    private String id;
    @NotNull
   
    @JsonFormat(shape = JsonFormat.Shape.ARRAY)
    private String serviceName;
    @NotNull
    @NotEmpty
    private Double timeFrequency;
    @NotNull
    @NotEmpty
    private Double kilometerFrequency;
    @NotNull
    @NotEmpty
    private String vehicleDescription;


    public VehicleServices( String serviceName,Double timeFrequency, Double kilometerFrequency, String vehicleDescription) {
        this.serviceName = serviceName;
        this.timeFrequency = timeFrequency;
        this.kilometerFrequency = kilometerFrequency;
        this.vehicleDescription = vehicleDescription;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public Double getTimeFrequency() {
        return timeFrequency;
    }

    public void setTimeFrequency(Double timeFrequency) {
        this.timeFrequency = timeFrequency;
    }

    public Double getKilometerFrequency() {
        return kilometerFrequency;
    }

    public void setKilometerFrequency(Double kilometerFrequency) {
        this.kilometerFrequency = kilometerFrequency;
    }

    public String getVehicleDescription() {
        return vehicleDescription;
    }

    public void setVehicleDescription(String vehicleDescription) {
        this.vehicleDescription = vehicleDescription;
    }

    public void setServiceName() {
    }
}
