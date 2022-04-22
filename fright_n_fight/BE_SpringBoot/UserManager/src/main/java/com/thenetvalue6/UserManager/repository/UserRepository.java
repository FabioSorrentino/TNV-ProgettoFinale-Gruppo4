package com.thenetvalue6.UserManager.repository;

import com.thenetvalue6.UserManager.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByUsername(String username);
    User findUserByEmail(String email);
}
