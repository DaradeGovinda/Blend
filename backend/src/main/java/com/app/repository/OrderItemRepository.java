package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
