package com.example.demo.customer;


import com.example.demo.Request.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="customer")
@CrossOrigin("*")
public class CustomerController {

    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/{phoneNo}")
    public Customer getCustomer(@PathVariable String phoneNo){
        return customerService.getCustomer(phoneNo);
    }

    @GetMapping("/request/{phoneNo}")
    public List<Request> getAllRequest(@PathVariable String phoneNo){
        return customerService.getAllRequest(phoneNo);
    }


    @GetMapping
    public List<Customer> getCustomers(){
        return customerService.getCustomers();

    }

    @PostMapping
    public Customer register(@RequestBody Customer customer){
        return customerService.register(customer);
    }

    @PostMapping("/login")
    public  Customer login(@RequestBody Customer customer){
        return customerService.login(customer);
    }


    @PutMapping("/{id}")
    public void updateCustomer(@PathVariable String id, @RequestBody Customer data){
        customerService.updateCustomer(id, data);
    }


}
