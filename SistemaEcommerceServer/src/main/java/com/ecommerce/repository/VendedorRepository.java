package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.domain.Vendedor;

@Repository
public interface VendedorRepository extends JpaRepository<Vendedor,Integer>{
	

}
