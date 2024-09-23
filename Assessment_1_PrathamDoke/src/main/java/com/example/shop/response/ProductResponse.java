package com.example.shop.response;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.*;


public class ProductResponse {
    public ProductResponse(){}
    public ProductResponse(String pname, long acost) {
        this.pname = pname;
        this.acost = acost;
    }

//    @Column(name = "pname")
    String pname;
//    @Column(name = "acost")
    long acost;

    public String getPname() {
        return pname;
    }

    public long getAcost() {
        return acost;
    }

    public void setPname(String pname) {
        this.pname = pname;
    }

    public void setAcost(long acost) {
        this.acost = acost;
    }
}
