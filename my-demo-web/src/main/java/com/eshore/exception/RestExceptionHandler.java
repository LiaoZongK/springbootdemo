package com.eshore.exception;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

@ControllerAdvice

public class RestExceptionHandler {
    
	 @ExceptionHandler(value = Exception.class)
	 public ModelAndView runtimeExceptionHandler(HttpServletRequest req,Exception e){
		   
		    ModelAndView mav = new ModelAndView();
	        mav.addObject("exception", e);
	        mav.addObject("url", req.getRequestURL());
	        mav.setViewName("error");
	        return mav;
	 }
	
}
