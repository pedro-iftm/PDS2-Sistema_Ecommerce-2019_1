package com.ecommerce.resource;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.ecommerce.domain.Vendedor;
import com.ecommerce.repository.VendedorRepository;

@RestController
@RequestMapping(value="/vendedores")
@CrossOrigin(origins = "http://localhost")
public class VendedorResource {
	
	@Autowired
	private VendedorRepository service;
	
	@GetMapping
	public ResponseEntity<List<Vendedor>> findAll() {
		List<Vendedor> vendedores = service.findAll();
		return ResponseEntity.ok().body(vendedores);
	}
		
	@PostMapping
	public ResponseEntity<?> salvar(@Valid @RequestBody Vendedor vendedor) {
		service.save(vendedor);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
		        .buildAndExpand(vendedor.getCodigo()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<?> atualizar(@Valid @RequestBody Vendedor vendedor) {
		service.save(vendedor);
	    return ResponseEntity.noContent().build();
	}
	
	@DeleteMapping(value="{codigo}")
	public ResponseEntity<?> excluir(@PathVariable Integer codigo) {
		try {
			service.deleteById(codigo);
			return ResponseEntity.ok(codigo);	
		} catch(EmptyResultDataAccessException e) {
			return ResponseEntity.notFound().build();
		}
	}

}