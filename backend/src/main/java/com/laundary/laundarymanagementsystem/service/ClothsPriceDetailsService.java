package com.laundary.laundarymanagementsystem.service;

import com.laundary.laundarymanagementsystem.entities.ClothsPriceDetails;
import com.laundary.laundarymanagementsystem.repository.ClothsPriceDetailsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClothsPriceDetailsService {

    private ClothsPriceDetailsRepository clothsPriceDetailsRepository;

    public ClothsPriceDetailsService(ClothsPriceDetailsRepository clothsPriceDetailsRepository) {
        this.clothsPriceDetailsRepository = clothsPriceDetailsRepository;
    }

    public List<ClothsPriceDetails> getClothsPriceDetails() {
        return clothsPriceDetailsRepository.findAll();
    }


    public ClothsPriceDetails getClothsPriceDetailsById(Integer id) {

        return clothsPriceDetailsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("there's no such clothdetails"));
    }


    public ClothsPriceDetails add(ClothsPriceDetails clothsPriceDetails) {

        return clothsPriceDetailsRepository.save(clothsPriceDetails);
    }


    public void delete(Integer id) {

        clothsPriceDetailsRepository.deleteById(id);
    }


}
