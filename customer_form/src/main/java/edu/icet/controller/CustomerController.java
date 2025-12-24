package edu.icet.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class CustomerController {

    @GetMapping("/get-name")
    public String getCustomerName(){
        return "deneth nadeeja";
    }

}
