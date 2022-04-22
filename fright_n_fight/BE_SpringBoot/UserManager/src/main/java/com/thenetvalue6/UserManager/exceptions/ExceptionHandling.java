package com.thenetvalue6.UserManager.exceptions;

import com.thenetvalue6.UserManager.model.HttpResponse;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestControllerAdvice
public class ExceptionHandling {
  public static final String INCORRECT_CREDENTIALS = "Username o password errati.";

  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<HttpResponse> badCredentialsException() {
    return createHttpResponse(BAD_REQUEST, INCORRECT_CREDENTIALS);
  }

  private ResponseEntity<HttpResponse> createHttpResponse(HttpStatus httpStatus, String message) {
    return new ResponseEntity<>(new HttpResponse(httpStatus.value(), httpStatus,
      httpStatus.getReasonPhrase().toUpperCase(), message), httpStatus);
  }

  @RequestMapping("/error")
  public ResponseEntity<HttpResponse> notFound404() {
    return createHttpResponse(NOT_FOUND, "Percorso non trovato");
  }

}
