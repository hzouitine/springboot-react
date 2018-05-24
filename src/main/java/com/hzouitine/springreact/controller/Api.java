package com.hzouitine.springreact.controller;

import com.hzouitine.springreact.domain.Employee;
import com.hzouitine.springreact.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class Api {

    private EmployeeRepository employeeRepository;

    public Api(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping("/employees")
    public List<Employee> allEmployees(){
        List<Employee> all = new ArrayList<>();
        employeeRepository.findAll().forEach(all::add);
        return all;
    }
}
