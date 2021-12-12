package com.example.demo.customer;

import com.example.demo.review.Review;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.example.demo.Request.Request;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCustomer;
    @Column(unique = true)
    private String phoneNo;
private String name;
private String password;
private String address;

    public Customer(Long idCustomer, String phoneNo, String name, String password, String address) {
        this.idCustomer = idCustomer;
        this.phoneNo = phoneNo;
        this.name = name;
        this.password = password;
        this.address = address;
    }

    @OneToMany(mappedBy = "customer")
    @JsonIgnore
    private List<Review> reviews=new ArrayList<>();


    public List<Request> getRequests() {
        return requests;
    }

    public void setRequests(List<Request> requests) {
        this.requests = requests;
    }

    @OneToMany(mappedBy = "customer")
    private List<Request> requests=new ArrayList<>();


public Customer(){}

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public Long getIdCustomer() {
        return idCustomer;
    }

    public void setIdCustomer(long idCustomer) {
        this.idCustomer = idCustomer;
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

//    public List<Request> getRequests() {
//        return requests;
//    }
//
//    public void setRequests(List<Request> requests) {
//        this.requests = requests;
//    }


    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    @Override
    public String toString() {
        return "Customer{" +
                "idCustomer=" + idCustomer +
                ", phoneNo='" + phoneNo + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", address='" + address + '\'' +
                ", reviews=" + reviews +
//                ", requests=" + requests +
                '}';
    }
}
