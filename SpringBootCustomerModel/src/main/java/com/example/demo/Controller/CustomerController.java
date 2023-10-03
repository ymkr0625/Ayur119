
package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.CustomerModel;
import com.example.demo.Service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody CustomerModel customerModel) {
		return customerService.registerUser(customerModel);
	}

	@GetMapping("/register")
	public List<CustomerModel> getAllCustomers() {
		return customerService.getAllCustomers();
	}
	
	@PostMapping("/login")
	public String loginUser(CustomerModel customerModel) {
		return customerService.loginCustomer(customerModel);
	}

}
