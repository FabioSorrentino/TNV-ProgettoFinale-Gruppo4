package com.thenetvalue6.UserManager.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.sql.DataSource;
import java.util.List;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //@Bean
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    DataSource dataSource;

    public static final String [] PUBLIC_URL = {"/user/login", "/user/register", "/user/logintest"};

    //@Autowired
    //public SecurityConfig(@Qualifier("userDetailsService") UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
    //    this.userDetailsService = userDetailsService;
    //    this.passwordEncoder = bCryptPasswordEncoder;
    //}




    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);


    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        /** fonte:
         *
         https://stackoverflow.com/questions/36968963/how-to-configure-cors-in-a-spring-boot-spring-security-application

        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type"));
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT","OPTIONS","PATCH", "DELETE"));
        configuration.setAllowCredentials(true);
        configuration.setExposedHeaders(List.of("Authorization"));
         */


        http.csrf().disable()
                //todo : VERIFICARE CHE FUNZIONI CON ANGULAR
                //.cors().configurationSource(request -> configuration)
                //.and()
                //.and()
                //.authorizeRequests().antMatchers(PUBLIC_URL).permitAll()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/users")
                .hasAnyAuthority("MOD", "ADMIN")
                .antMatchers(HttpMethod.POST, PUBLIC_URL)
                .permitAll()
                .antMatchers(HttpMethod.DELETE, "/delete/*")
                .hasAnyAuthority("user:delete")
                .anyRequest().authenticated()
                .and().httpBasic();
                //.permitAll();
                //.and()
                //.httpBasic();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return passwordEncoder;
    }

    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

}
