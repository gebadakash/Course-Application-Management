package com.Rest.example.DaoInterface;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Rest.example.model.Courses;


@Repository
public interface CourseDaoI extends JpaRepository<Courses, Integer> {

}
