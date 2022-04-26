package com.tnv.loginApp.service;

import com.tnv.loginApp.dao.AuthoritiesRepositoryDAO;
import com.tnv.loginApp.dao.UserRepositoryDAO;
import com.tnv.loginApp.model.Authorities;
import com.tnv.loginApp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserRepositoryDAO _userDAO;
    AuthoritiesRepositoryDAO _authoritiesDAO;
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(
            @Qualifier("dbUserDAO") UserRepositoryDAO userDAO,
            @Qualifier("dbAuthoritiesDAO") AuthoritiesRepositoryDAO authoritiesDAO)
    {
        _userDAO = userDAO;
        _authoritiesDAO = authoritiesDAO;
    }

    public User addUser(User user) {
        Integer userId = getUserByUsername(user.getUsername()).getId();
        String username = user.getUsername();

        if(userId!=null) {
            return null;
        }

        Authorities auth = new Authorities();
        auth.setUsername(username);
        auth.setAuthority("ROLE_USER");

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabledStatus(true);
        _userDAO.save(user);
        _authoritiesDAO.save(auth);
        return getUserByUsername(username);
    }

    public Iterable<User> getAllUsers(){
        return _userDAO.findAll();
    }

    public User getUserById(int userId){
        return (User) _userDAO.findById(userId).get();
    }

    public User getUserByUsername(String username){
        System.out.println(username);
        for (User user: this.getAllUsers()) {
            if(user.getUsername().equals(username)) {
                user.setPassword(null);
                return user;
            }
        }
        return null;
    }

    public User updateUser(int userId, User updatedUser){
        User userToUpdate = getUserById(userId);
        userToUpdate.setUsername(updatedUser.getUsername());
        userToUpdate.setPassword(updatedUser.getPassword());
        return (User) _userDAO.save(userToUpdate);
    }

    public boolean deleteUser(int userId){
        User userToDelete = getUserById(userId);
        if(userToDelete!=null){
            _userDAO.delete(userToDelete);
            return true;
        }
        return false;
    }
}