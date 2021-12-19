package com.example.demo.customer;

import com.example.demo.Request.Request;
import com.example.demo.Role.Role;
import com.example.demo.Role.RoleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerService {

        private final CustomerRepository customerRepository;

    private final RoleRepo roleRepo;

        @Autowired
        public CustomerService(CustomerRepository customerRepository, RoleRepo roleRepo) {
        this.customerRepository = customerRepository;
            this.roleRepo = roleRepo;
        }


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

//        public  Customer register(Customer customer){
//            return customerRepository.save(customer);
//        }
public Customer register(Form form){
    Customer user = form.getCustomer();
    Long role_id = form.getRole_id();
    Role role = roleRepo.findById(role_id).orElse(null);

    user.getRoles().add(role);
//    user.setPassword(passwordEncoder.encode(user.getPassword()));

    return customerRepository.save(user);
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


