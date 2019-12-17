package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpinionService {

    private OpinionRepository opinionRepository;

    @Autowired
    public OpinionService(OpinionRepository opinionRepository) {
        this.opinionRepository = opinionRepository;
    }

    public Opinion saveOrUpdate(Opinion opinion){

        return opinionRepository.save(opinion);
    }
}
