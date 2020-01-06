package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin
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

    @GetMapping("/{phone_id}")
    public Optional<Phone> getPhoneById(@PathVariable String phone_id){
        Optional<Phone> phone = phoneService.findById(phone_id);

        return phone;
    }

    @GetMapping("/{phone_name}/all")
    public List<Phone> getAllContaing(@PathVariable String phone_name){
        String nameToFind = phone_name.substring(0,1).toUpperCase() + phone_name.substring(1);
        List<Phone> phones = phoneService.findPhoneWithName(nameToFind);

        return phones;
    }

    @PostMapping
    public ResponseEntity<?> createPhone(@Valid @RequestBody Phone phone){
        phoneService.saveOrUpdate(phone);

        return new ResponseEntity<Phone>(phone, HttpStatus.CREATED);
    }

    @PutMapping(path = "/update")
    public Phone updatePhone(@Valid @RequestBody Phone phone){
        return phoneRepository.save(phone);
    }

}
