package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/phone")
public class PhoneController {
    private PhoneService phoneService;

    @Autowired
    PhoneRepository phoneRepository;

    @Autowired
    public PhoneController(PhoneService phoneService) {
        this.phoneService = phoneService;
    }

    @GetMapping("/all")
    public Iterable<Phone> getAllPhones(){
        return phoneService.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createPhone(@Valid @RequestBody Phone phone){
        phoneService.saveOrUpdate(phone);

        return new ResponseEntity<Phone>(phone, HttpStatus.CREATED);
    }
}
