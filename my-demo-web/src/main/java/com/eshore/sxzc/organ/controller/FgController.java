package com.eshore.sxzc.organ.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/fg")
public class FgController {

	@RequestMapping("/index")
	public String index(){
		
		return "/fg/index";
	}
	
}
