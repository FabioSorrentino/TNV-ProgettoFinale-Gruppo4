package com.tnv.loginApp.controller;

import com.tnv.loginApp.model.User;
import com.tnv.loginApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Base64;

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
    public Integer login(@RequestHeader(required = false, value="Authorization") String authorization) {
        String username = new String(
                Base64.getDecoder().decode(authorization // decodes Authorizazion header
                        .substring("Basic".length()).trim())) // trims "Basic" from header
                        .split(":")[0]; // selects username property
        return _userService.getUserIdByUsername(username);
    }

    @PostMapping("/adduser")
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
