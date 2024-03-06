import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from 'axios';
import base_url from "../api/BootApi";
import { toast } from "react-toastify";


const AllCourses = () => {
  useEffect(() => {
    
    document.title = "All Courses || Learn React"
   

  }, []);

  const getAllCoursesFromServer=()=>{

    axios.get(`${base_url}/courses`).then(
        (response)=>{

            setCourses(response.data);
            toast.success("Courses Loaded Sucessfully..",{
                position:"top-center"
            })

        },
        (error)=>{

            console.log(error);
            toast.error("Something Went Wrong !", {
                position:"top-center"
            })
        }
    )
  }

  useEffect(() => {

    getAllCoursesFromServer();
   
  }, [])
  


  const [courses, setCourses] = useState([]);


  const updateAllCourse =(id)=>{

    setCourses(courses.filter((c)=> c.id!=id));

  };

  return (
    <div>
      <h1 className="text-center">All Courses</h1>
      <p className="text-center">List of Courses are as follows</p>

      {courses.length > 0
        ? courses.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <Course course={item} update={updateAllCourse}></Course>
          ))
        : "No courses"}
    </div>
  );
};

export default AllCourses;
