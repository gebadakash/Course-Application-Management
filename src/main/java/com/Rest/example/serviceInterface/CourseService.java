package com.Rest.example.serviceInterface;

import java.util.List;
import java.util.Optional;

import com.Rest.example.model.Courses;

public interface CourseService {

	List<Courses> getAllCourses();

	Optional<Courses> getSingleCourse(int courseId);

	Courses updateCourse(Courses course);
	
	void deleteCourse(int courseId);

	Courses addCourses(Courses course);

}
