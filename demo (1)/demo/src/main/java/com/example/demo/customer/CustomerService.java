package com.example.demo.customer;

import com.example.demo.Request.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService {

        private final CustomerRepository customerRepository;


        @Autowired
        public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;}


    public List<Customer> getCustomers(){
        return customerRepository.findAll();
    }


        public Customer getCustomer(String phoneNo){
            return customerRepository.findByPhoneNo(phoneNo);
        }


        public void updateCustomer(String id, Customer data){
            Long customer_id = Long.parseLong(id);
            Customer customer = customerRepository.findById(customer_id).orElse(null);

            if (customer != null){
                customer.setName(data.getName());
                customer.setAddress(data.getAddress());
                customer.setPhoneNo(data.getPhoneNo());
                customerRepository.save(customer);
            }

        }

        public  Customer register(Customer customer){
            return customerRepository.save(customer);
        }

        public List<Request> getAllRequest(String  phoneNo){
            Customer customer=customerRepository.findByPhoneNo(phoneNo);
            return customer.getRequests();
        }

        public Customer login(Customer data){
            Customer customer=   customerRepository.findByPhoneNo(data.getPhoneNo());
            if(customer.getPassword().equals(data.getPassword())){
                return customer;
            }
            return null;
        }



    }


