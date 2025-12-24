package edu.icet.controller;

import edu.icet.model.Customer;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/customer/api")
public class CustomerController {
    List<Customer>customerList=new ArrayList<>();

    @GetMapping("/name")
    public String getCustomerName(){
        return "name";
    }

    @PostMapping("/add-details")
    public void addCustomer(@RequestBody Customer customer){
        customerList.add(customer);
    }
    @GetMapping("/get-details")
    public List<Customer> getCustomerList() {
        return customerList;
    }
}
