package com.example.demo;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long phone_id;
    @Column(unique = true)
    private String fullName;
    private String description;
    private String imageUrl;
    @OneToMany(mappedBy = "phone", fetch =  FetchType.LAZY)
    @JsonManagedReference
    private List<Opinion> opinions = new ArrayList<>();
}
