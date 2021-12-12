package com.example.demo.review;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping(path="review")
@CrossOrigin("*")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping
    public List<Review> getReviewsList(){
        return reviewService.getReviewsList();
    }

    @DeleteMapping("/{id}")
    public void deleteReview(@PathVariable String id){
        reviewService.deleteReview(id);

    }


    @PostMapping
    public Review addReview(@RequestBody Form form){
        return reviewService.saveReview(form.getReview(),form.getIdMaintenanceService(),form.getIdCustomer());
    }

}

class Form{
    private Review review;
    private Long idMaintenanceService;
    private Long idCustomer;
    public Long getIdMaintenanceService() {return idMaintenanceService;}
    public Review getReview(){return review;}
    public Long getIdCustomer(){return idCustomer;}

    }