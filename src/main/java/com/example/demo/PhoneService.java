package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneService {
    private PhoneRepository phoneRepository;

    @Autowired
    public PhoneService(PhoneRepository phoneRepository) {
        this.phoneRepository = phoneRepository;
    }

    public Iterable<Phone> findAll(){
        return phoneRepository.findAll();
    }

    public Phone saveOrUpdate(Phone phone){
        return phoneRepository.save(phone);
    }
}
