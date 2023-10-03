package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.CustomerModel;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerModel, Long> {

	CustomerModel findByEmailAndPassword(String email, String password);

	Optional<CustomerModel> findByEmail(String email);
}
