package com.example.demo.Request;

import com.example.demo.customer.Customer;
import com.example.demo.maintenance_service.MaintenanceService;
import com.example.demo.serviceType.ServiceType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "request")
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idRequest ;
    private String  state ;
    private Date date;
    private String time;
    private String comment;


    @ManyToMany
    @JoinTable (
            name="service_enrolled",
            joinColumns=@JoinColumn(name="idRequest"),
            inverseJoinColumns = @JoinColumn(name = "idServiceType")

    )
    private List<ServiceType> service_enrolled=new ArrayList<>();


    @ManyToOne(fetch=FetchType.EAGER,optional = true)
    @JsonIgnore
    private Customer customer;


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

public Request(){}


    public Request(Long idRequest, String state, String comment) {
        this.idRequest = idRequest;
        this.state = state;
        this.comment = comment;

    }
    public Long getIdRequest() {
        return idRequest;
    }

    public void setIdRequest(Long idRequest) {
        this.idRequest = idRequest;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public List<ServiceType> getService_enrolled() {
        return service_enrolled;
    }

    public void setService_enrolled(List<ServiceType> service_enrolled) {
        this.service_enrolled = service_enrolled;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public  void enrollService(ServiceType serviceType){
        service_enrolled.add(serviceType);
    }

    @Override
    public String toString() {
        return "Request{" +
                "idRequest=" + idRequest +
                ", state='" + state + '\'' +
                ", date=" + date +
                ", time='" + time + '\'' +
                ", comment='" + comment + '\'' +
                ", service_enrolled=" + service_enrolled +
                ", customer=" + customer +
                '}';
    }
}
