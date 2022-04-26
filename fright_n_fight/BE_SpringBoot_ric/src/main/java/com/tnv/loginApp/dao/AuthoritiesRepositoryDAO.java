package com.tnv.loginApp.dao;

import com.tnv.loginApp.model.Authorities;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository("dbAuthoritiesDAO")
public interface AuthoritiesRepositoryDAO extends CrudRepository<Authorities, Integer> {

}