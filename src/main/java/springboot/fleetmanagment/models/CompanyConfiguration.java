package springboot.fleetmanagment.models;


import com.fasterxml.jackson.annotation.JsonFormat;

import com.mongodb.lang.NonNull;
import lombok.*;
import org.intellij.lang.annotations.Pattern;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;



@Getter
@Setter
@Data
@Document
public class CompanyConfiguration {

    @Id
    private String id;

    @NonNull
    @Indexed(unique = true)
    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    private String companyName;
    @NonNull
    private String  companyLogo;
    @NonNull
    @Pattern(value = "[a-zA-Z]+,[a-zA-Z]+,[0-9]")
    private String address;
    @NonNull
    @Pattern(value = "[a-zA-Z]+@[a-zA-Z]+\\.[a-zA-Z]{2,3}")
    private String email;
    @NotNull

    private String description;


    public CompanyConfiguration( String companyName, String companyLogo, String address, String email, String description) {
        this.companyName = companyName;
        this.companyLogo = companyLogo;
        this.address = address;
        this.email = email;
        this.description = description;
    }
    public CompanyConfiguration(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;

    }

    public void setCompanyName( String companyName) {

                this.companyName = companyName;

    }

    public String getCompanyLogo() {


        return companyLogo;
    }

    public void setCompanyLogo(String companyLogo) {
        this.companyLogo = companyLogo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {

            this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

