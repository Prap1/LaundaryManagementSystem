package com.laundary.laundarymanagementsystem.repository;

import com.laundary.laundarymanagementsystem.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query(value = "SELECT * from user  a where a.email = :email AND a.password = :password",nativeQuery = true)
    public User getUserByEmailAndPassword(@Param("email") String email, @Param("password") String password);

}
