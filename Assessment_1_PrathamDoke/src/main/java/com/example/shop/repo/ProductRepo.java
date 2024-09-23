package com.example.shop.repo;

import com.example.shop.entity.ProductEntity;
import com.example.shop.response.ProductResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepo extends JpaRepository<ProductEntity, Integer> {
    @Query(nativeQuery = true, value = "SELECT pname, CAST(IF(discount > 0, acost - (acost * (discount/100)), acost) AS unsigned) from products ORDER BY pname ASC;")
    List<Object []>getPriceOfProduct();
//    @Query(nativeQuery = true, value = "SELECT * FROM products ORDER BY pname ASC;")
//    List<ProductEntity>getPriceOfProduct();
}
