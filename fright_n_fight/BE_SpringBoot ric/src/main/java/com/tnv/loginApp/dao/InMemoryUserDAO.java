package com.tnv.loginApp.dao;

import com.tnv.loginApp.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository("userDAO")
public class InMemoryUserDAO implements UserDAO{
    @Override
    public User addUser(User user) {
        return null;
    }

    @Override
    public User getUserById(int userId) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public User updateUser(int userId, User user) {
        return null;
    }

    @Override
    public boolean deleteUser(int userId) {
        return false;
    }
}
