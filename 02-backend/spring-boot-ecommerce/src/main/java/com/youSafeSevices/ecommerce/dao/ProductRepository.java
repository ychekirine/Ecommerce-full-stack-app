package com.youSafeSevices.ecommerce.dao;

import com.youSafeSevices.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProductRepository extends JpaRepository<Product,Long> {


}
