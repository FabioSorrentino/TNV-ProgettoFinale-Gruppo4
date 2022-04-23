package com.tnv.loginApp.service;

import com.tnv.loginApp.dao.UserRepositoryDAO;
import com.tnv.loginApp.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    UserRepositoryDAO _userDAO;
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        _userDAO = userDAO;
    }

    public String addUser(User user) {
        User result = _userDAO.save(user);
        if(result != null){
            return "utente salvato correttamente";
        }
        else {
            return "Errore nel salvataggio dell'utente";
        }
    }

    public Iterable<User> getAllUsers(){
        return _userDAO.findAll();
    }

    public User getUserById(int userId){
        return (User) _userDAO.findById(userId).get();
    }

    public Integer getUserIdByUsername(String username){
        for (User user: this.getAllUsers()) {
            if(user.getUsername().equals(username))
                return user.getId();
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