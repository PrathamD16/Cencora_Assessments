package com.example.shop.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pid")
    String pid;
    @Column(name = "pname")
    String pname;
    @Column(name = "acost")
    int acost;
    @Column(name = "discount")
    int discount;

    public String getPid() {
        return pid;
    }

    public String getPname() {
        return pname;
    }

    public int getAcost() {
        return acost;
    }

    public int getDiscount() {
        return discount;
    }

    public void setPid(String pid) {
        this.pid = pid;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public void setAcost(int acost) {
        this.acost = acost;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }
}
