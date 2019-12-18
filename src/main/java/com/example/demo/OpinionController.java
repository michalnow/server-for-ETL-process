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
@RequestMapping("/api/opinion")
public class OpinionController {

    @Autowired
    private OpinionService opinionService;

    @Autowired
    private  PhoneRepository phoneRepository;

    @PostMapping
    public ResponseEntity<?> createOpinion(@Valid @RequestBody Opinion opinion){
        opinionService.saveOrUpdate(opinion);
        return new ResponseEntity<Opinion>(opinion, HttpStatus.CREATED);
    }

    @PostMapping("/{phone_id}")
    public Opinion createOpinion(@PathVariable(value = "phone_id") Long phone_id, @Valid @RequestBody Opinion opinion) throws Exception {
        return phoneRepository.findById(phone_id).map(phone -> {
            opinion.setPhone(phone);
            return opinionService.saveOrUpdate(opinion);
        }).orElseThrow(()-> new Exception("phone not found"));
    }

    @GetMapping("/{phone_id}/all")
    public List<Opinion> findAllOpinionsByPhoneId(@PathVariable(value = "phone_id") Long phone_id){
        Optional<Phone> phone = phoneRepository.findById(phone_id);

        return opinionService.findOpinionByPhone(phone);

    }

}
