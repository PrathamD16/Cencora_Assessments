package com.example.shop.service;

import com.example.shop.entity.ProductEntity;
import com.example.shop.repo.ProductRepo;
import com.example.shop.response.ProductResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.io.*;


@Service
public class ProdService {
    @Autowired
    ProductRepo repo;
    @Autowired
    ModelMapper modelMapper;


    public List<ProductResponse> getPriceOfProducts(){
//        List<ProductEntity>list = repo.getPriceOfProduct();
        List<ProductResponse>res = new ArrayList<>();
        List<Object []>list = repo.getPriceOfProduct();
        System.out.println(list.size());
        for(Object it []: list){
//            System.out.println((String) it[0]);
//            System.out.println((BigDecimal) it[1]);
            String name = (String ) it[0];
            long price = (Long) it[1];
            res.add(new ProductResponse(name, price));
        }

//        List<ProductResponse>res = repo.getPriceOfProduct();
        return res;
    }
}
