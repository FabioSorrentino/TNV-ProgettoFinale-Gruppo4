package com.thenetvalue6.UserManager.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.Date;

@Getter @Setter
public class HttpResponse {
  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss" /*, timezone = "Europe/Rome"*/)
  private Date timeStamp;
  private int httpStatusCode;
  private HttpStatus httpStatus;
  private String reason;
  private String message;

  public HttpResponse(int httpStatusCode, HttpStatus httpStatus, String reason, String  message) {
    this.timeStamp = new Date();
    this.httpStatus = httpStatus;
    this.httpStatusCode = httpStatusCode;
    this.reason = reason;
    this.message = message;
  }





}
