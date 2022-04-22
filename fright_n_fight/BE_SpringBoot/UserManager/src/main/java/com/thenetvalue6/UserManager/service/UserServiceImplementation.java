package com.thenetvalue6.UserManager.service;

import com.thenetvalue6.UserManager.exceptions.EmailExistsException;
import com.thenetvalue6.UserManager.exceptions.UsernameExistsException;
import com.thenetvalue6.UserManager.model.Role;
import com.thenetvalue6.UserManager.model.User;
import com.thenetvalue6.UserManager.model.UserPrincipal;
import com.thenetvalue6.UserManager.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@Qualifier("userDetailsService")
public class UserServiceImplementation implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    //@Autowired
    //public UserServiceImplementation(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    //    this.userRepository = userRepository;
    //    this.passwordEncoder = passwordEncoder;
    //}

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User " + username + "not found!");
        } else {
            //user.setLastLogin(new Date());
            userRepository.save(user);
            UserPrincipal userPrincipal = new UserPrincipal(user);
            return userPrincipal;
        }
    }

    public void deleteUser(String username) throws Exception {
        User user = userRepository.findUserByUsername(username);
        userRepository.deleteById(user.getId());
    }



    @Override
    public User register(String firstName, String lastName, String username, String email, String password) throws Exception {
        validateUsernamaAndEmail("", username, email);
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setActive(true);
        user.setNotLocked(true);
        user.setRole(Role.ROLE_USER.name());
        user.setAuthorities(Role.ROLE_USER.getAuthorities());
        userRepository.save(user);

        return user;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }


    private User validateUsernamaAndEmail(String oldUsername, String newUsername, String newEmail) throws EmailExistsException, UsernameExistsException, UsernameNotFoundException {
        User userWithNewUsername = findUserByUsername(newUsername);
        User userWithNewEmail = findUserByEmail(newEmail);
        if (StringUtils.isNotBlank(oldUsername)) {
            User currentUser = findUserByUsername(oldUsername);
            if (currentUser == null) {
                throw new UsernameNotFoundException("User with username " + oldUsername + " not found!");
            }
            if (userWithNewUsername != null && !currentUser.getId().equals(userWithNewUsername.getId())) {
                throw new UsernameExistsException("Username already in use!");
            }
            if (userWithNewEmail != null && !currentUser.getId().equals(userWithNewEmail.getId())) {
                throw new EmailExistsException("Email already in use!");
            }
            return currentUser;
        } else {
            if (userWithNewUsername != null) {
                throw new UsernameExistsException("Username already in use!");
            }
            if (userWithNewEmail != null) {
                throw new EmailExistsException("Email already in use!");
            }
        }
        return null;
    }


}
