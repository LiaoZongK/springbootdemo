package com.eshore.sxzc.organ.service;

import com.eshore.sxzc.organ.pojo.FsOrgan;
import com.github.pagehelper.Page;

public interface OrganService {
	 Page<FsOrgan> findByPage(int pageNo, int pageSize);
}
