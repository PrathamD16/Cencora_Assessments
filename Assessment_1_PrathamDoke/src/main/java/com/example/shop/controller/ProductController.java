package com.example.shop.controller;

import java.util.*;
import com.example.shop.response.ProductResponse;
import com.example.shop.service.ProdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    @Autowired
    ProdService service;
    @RequestMapping("/getProduct")
    public ResponseEntity<List<ProductResponse>>getList(){
        List<ProductResponse>res = service.getPriceOfProducts();
        return ResponseEntity.status(HttpStatus.OK).body(res);
    }
}
