package com.eshore.sxzc.organ.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eshore.sxzc.organ.mapper.FsOrganMapper;
import com.eshore.sxzc.organ.pojo.FsOrgan;
import com.eshore.sxzc.organ.service.OrganService;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

@Service("organService")
public class OrganServiceImpl implements OrganService{

	@Autowired
	private  FsOrganMapper fsOrganMapper;
	
	
	@Override
	public Page<FsOrgan> findByPage(int pageNo, int pageSize) {
		
		  PageHelper.startPage(pageNo, pageSize);
		  return fsOrganMapper.findByPage();
	
	}
	
	

	public FsOrganMapper getFsOrganMapper() {
		return fsOrganMapper;
	}

	
	
	public void setFsOrganMapper(FsOrganMapper fsOrganMapper) {
		this.fsOrganMapper = fsOrganMapper;
	}


	
	
	
	
}
