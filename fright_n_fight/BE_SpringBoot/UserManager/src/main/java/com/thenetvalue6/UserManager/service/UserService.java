package com.thenetvalue6.UserManager.service;

import com.thenetvalue6.UserManager.exceptions.EmailExistsException;
import com.thenetvalue6.UserManager.model.User;

import java.util.List;

public interface UserService {

    User register(String firstName, String lastName, String username, String email, String password) throws Exception, EmailExistsException;

    List<User> getUsers();

    User findUserByUsername(String username);

    User findUserByEmail(String email);

    void deleteUser(String username) throws Exception;
}
