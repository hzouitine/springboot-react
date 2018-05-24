package com.hzouitine.springreact.repository;

import com.hzouitine.springreact.domain.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
