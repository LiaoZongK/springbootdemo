package com.eshore.sxzc.organ.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.eshore.sxzc.organ.pojo.FsOrgan;
import com.eshore.sxzc.organ.pojo.FsOrganExample;
import com.github.pagehelper.Page;

@Mapper
public interface FsOrganMapper {
    int countByExample(FsOrganExample example);

    int deleteByExample(FsOrganExample example);

    int insert(FsOrgan record);

    int insertSelective(FsOrgan record);

    List<FsOrgan> selectByExample(FsOrganExample example);

    int updateByExampleSelective(@Param("record") FsOrgan record, @Param("example") FsOrganExample example);

    int updateByExample(@Param("record") FsOrgan record, @Param("example") FsOrganExample example);

    /**
     * 获取所有数据
     * @return
     */
    List<FsOrgan> findAll();

    /**
     * 分页查询数据
     * @return
     */
    Page<FsOrgan> findByPage();

}