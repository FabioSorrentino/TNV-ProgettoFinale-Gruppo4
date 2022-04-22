package com.tnv.loginApp.dao;

import com.tnv.loginApp.model.User;
import java.util.List;

public interface UserDAO {
    public User addUser(User user);
    public User getUserById(int userId);
    public List<User> getAllUsers();
    public User updateUser(int userId, User user);
    public boolean deleteUser(int userId);
}
