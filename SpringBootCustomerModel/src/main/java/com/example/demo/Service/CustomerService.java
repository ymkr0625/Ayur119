package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CustomerModel;
import com.example.demo.Repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	
	public ResponseEntity<String> registerUser(CustomerModel customerModel) {
		
		if(customerRepository.findByEmail(customerModel.getEmail()).isPresent()) {
		return ResponseEntity.badRequest().body("Email is Already Registered.");
	}
		
		customerRepository.save(customerModel);
		return ResponseEntity.ok("Registered Successfully.");
	}
	
	public List<CustomerModel> getAllCustomers(){
		return (List<CustomerModel>) customerRepository.findAll();
	}
	
    public String loginCustomer( CustomerModel customer) {
        CustomerModel existingCustomer = customerRepository.findByEmailAndPassword(customer.getEmail(), customer.getPassword());
        return existingCustomer != null ? "Login successful" : "Invalid email or password";
    }
	
}