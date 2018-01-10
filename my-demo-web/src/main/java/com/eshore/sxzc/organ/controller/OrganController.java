package com.eshore.sxzc.organ.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.druid.support.json.JSONUtils;
import com.eshore.common.util.PageInfo;
import com.eshore.sxzc.organ.pojo.FsOrgan;
import com.eshore.sxzc.organ.service.OrganService;
import com.github.pagehelper.Page;

@Controller
@RequestMapping("/organ")
public class OrganController {
	private Logger logger = Logger.getLogger(getClass());
	
    @Autowired
	private OrganService organService;
	
	@RequestMapping("query")
	public String queryOrgan(ModelMap map){
//		
//		Page<FsOrgan>  fs  = organService.findByPage(1, 5);
//		PageInfo<FsOrgan> fspageInfo = new PageInfo<>(fs);
//         logger.info("123123123123123213");		
//		map.addAttribute("fspageInfo", fspageInfo);
		return "/fg/index";
	}
	
	
	
	
	

	public OrganService getOrganService() {
		return organService;
	}

	public void setOrganService(OrganService organService) {
		this.organService = organService;
	}

	
}
