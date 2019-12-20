package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OpinionRepository extends CrudRepository<Opinion,String> {

    public Opinion findByReview(String review);
    public List<Opinion> findOpinionByPhone(Optional<Phone> phone);
}
