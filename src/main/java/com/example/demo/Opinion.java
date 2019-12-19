package com.example.demo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Opinion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "LONGTEXT")
    private String review;
    private String nickname;
    private int grade;
    private String recommendation;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date publishDate;
    private int thumbsUp;
    private int thumbsDown;
    @ManyToOne
    @JoinColumn(name = "phone_id", nullable = false)
    @JsonBackReference
    private Phone phone;
}
