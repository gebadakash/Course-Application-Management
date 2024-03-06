package com.Rest.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Rest.example.model.Courses;
import com.Rest.example.serviceInterface.CourseService;

@RestController
@CrossOrigin
public class HomeController {
	
	
	@Autowired
	CourseService courseService;
	

	
	@GetMapping("/courses")
	public List<Courses> getCourses(){
		
		List<Courses> list = courseService.getAllCourses();
		
		return list;
	} 
	
	@GetMapping("/courses/{courseId}")
	public Optional<Courses> getSingleCourse(@PathVariable int courseId) {
		
	Optional<Courses> c = courseService.getSingleCourse(courseId);
     
     return c;
	}
	
	
	@PostMapping("/add")
	public Courses addCourse(@RequestBody Courses course) {
		
		Courses c =  courseService.addCourses(course);
		
		return c;
	}
	
	@PutMapping("/update")
	public Courses updateCourse(@RequestBody Courses course) {
		
		return courseService.updateCourse(course);
		
	}
	
	@DeleteMapping("/delete/{courseId}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable int courseId) {
		
		try{
			
			courseService.deleteCourse(courseId);
			return new ResponseEntity<>(HttpStatus.OK);
			
		}catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

}
