package com.tnv.loginApp.service;

import com.tnv.loginApp.dao.UserRepositoryDAO;
import com.tnv.loginApp.model.User;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.net.http.HttpResponse;
import java.util.Base64;
import java.util.Optional;

@Service
public class UserService {
    UserRepositoryDAO _userDAO;
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        _userDAO = userDAO;
    }

    public boolean login(String authorization) {
        //for (User userToFind: getAllUsers()) {
            //return userToFind.getUsername().equals(user.getUsername());
            //if(userToFind.getUsername().equals(user.getUsername()))
                //return passwordEncoder.matches(user.getPassword(),userToFind.getPassword());
        //}
        System.out.println(authorization);

        return true;
    }

    public String user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return new String(Base64.getDecoder().decode(authToken)).split(":")[0];
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
        Optional result = _userDAO.findById(userId);
        return (User) result.get();
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
