package com.tnv.loginApp.controller;

import com.tnv.loginApp.model.User;
import com.tnv.loginApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("/users")
public class UserController {
    private UserService _userService;

    @Autowired
    public UserController(UserService userService) {
        _userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/login")
    public boolean login(@RequestHeader(required = false, value="Authorization") String authorization) {
        return _userService.login(authorization);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user")
    public boolean user(@RequestHeader(required = false, value="Authorization") String authorization) {
        System.out.println(authorization);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/admin")
    public boolean admin(@RequestHeader(required = false, value="Authorization") String authorization) {
        System.out.println(authorization);
        return true;
    }

    @PostMapping("/")
    public String AddUser(@RequestBody User user) {
        return _userService.addUser(user);
    }

    @GetMapping("/")
    public Iterable<User> getAllUsers(){
        return _userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") int userId){
        return _userService.getUserById(userId);
    }

    @PutMapping("/{id}")
    public User updateUser(@PathVariable("id") int userId, @RequestBody User updatedUser){
        return _userService.updateUser(userId,updatedUser);
    }
}
