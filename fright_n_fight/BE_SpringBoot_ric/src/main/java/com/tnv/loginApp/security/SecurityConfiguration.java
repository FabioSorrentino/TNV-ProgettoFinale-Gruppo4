package com.tnv.loginApp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(this.dataSource)
                /*.withUser("ric")
                .password(passwordEncoder.encode("1234"))
                .roles("USER");*/
                .usersByUsernameQuery("select username,password,enabled "
                        + "from users "
                        + "where username = ?")
                .authoritiesByUsernameQuery("select username, authority "
                        + "from authorities "
                        + "where username = ?");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // CORS config
        http.cors()//.and()// .disable()//.csrf().disable()
                //.authorizeRequests()
                //.antMatchers(HttpMethod.GET, "login/*").anonymous()//permitAll()
                //.antMatchers(HttpMethod.POST,"adduser/*").anonymous()
                .and().csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,"login/*").hasAnyRole("USER")
                .antMatchers(HttpMethod.POST,"adduser/*").anonymous()
                //.anyRequest().authenticated()
                .and()
                .httpBasic();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return passwordEncoder;
    }
}
