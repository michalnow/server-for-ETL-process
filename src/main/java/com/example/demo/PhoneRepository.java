package com.example.demo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhoneRepository extends JpaRepository<Phone, String> {
    public List<Phone> findAllByFullNameContaining(String name);

}