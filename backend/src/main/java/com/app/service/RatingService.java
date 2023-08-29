package com.app.service;

import java.util.List;

import com.app.exception.ProductException;
import com.app.model.Rating;
import com.app.model.User;
import com.app.request.RatingRequest;

public interface RatingService {

	public Rating createRating(RatingRequest req, User user) throws ProductException;

	public List<Rating> getProductsRating(Long productId);

}
