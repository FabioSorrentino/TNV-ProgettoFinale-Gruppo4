package com.thenetvalue6.UserManager.controllers;

import com.thenetvalue6.UserManager.exceptions.EmailExistsException;
import com.thenetvalue6.UserManager.exceptions.ExceptionHandling;
import com.thenetvalue6.UserManager.model.User;
import com.thenetvalue6.UserManager.model.UserPrincipal;
import com.thenetvalue6.UserManager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", allowedHeaders = "*", exposedHeaders = "*")
public class UserController extends ExceptionHandling {
    private UserService userService;
    private AuthenticationManager authenticationManager;

    @Autowired
    public UserController(UserService userService, AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
    }

    @GetMapping("/logintest")
    @CrossOrigin
    public String showUser() {
        return "ciao!";
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        authenticate(user.getUsername(), user.getPassword());
        User loggedUser = userService.findUserByUsername(user.getUsername());
        UserPrincipal userPrincipal = new UserPrincipal(loggedUser);
        return new ResponseEntity<>(loggedUser, HttpStatus.OK);
    }


    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) throws Exception, EmailExistsException {
        User newUser = userService.register(user.getFirstName(), user.getLastName(), user.getUsername(), user.getEmail(), user.getPassword());
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> allUsers = userService.getUsers();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{username}")
    @PreAuthorize("hasAnyAuthority('user:delete')")
    public String deleteUser(@PathVariable("username") String username) throws Exception {
        userService.deleteUser(username);
        return "User with username " + username + " deleted successfully!";
    }




    private void authenticate(String username, String password) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
