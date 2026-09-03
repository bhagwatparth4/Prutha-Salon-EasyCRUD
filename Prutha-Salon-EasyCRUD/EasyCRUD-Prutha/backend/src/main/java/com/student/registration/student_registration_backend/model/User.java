package com.student.registration.student_registration_backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "customers")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String email;
    private String mobileNumber;
    private String service;
    private String appointmentDate;
    private String appointmentTime;
    private Double price;

    @Column(length = 1000)
    private String notes;
}
