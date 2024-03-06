package com.Rest.example.serviceImplementation;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Rest.example.DaoInterface.CourseDaoI;
import com.Rest.example.model.Courses;
import com.Rest.example.serviceInterface.CourseService;


@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDaoI courseDao;
	
	
	@Override
	public List<Courses> getAllCourses() {
		
		return courseDao.findAll();
		
	}


	@Override
	public Optional<Courses> getSingleCourse(int courseId) {
		
		return courseDao.findById(courseId);
		
	}


	@Override
	public Courses updateCourse(Courses course) {
		
		courseDao.save(course);
		
		return course;
	}


	@Override
	public void deleteCourse(int parseLong) {
		
		
		courseDao.deleteById(parseLong);
		
	}


	@Override
	public Courses addCourses(Courses course) {
		
		courseDao.save(course);
		
		return course;
	}



}
