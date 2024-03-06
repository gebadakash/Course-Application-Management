import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import axios from 'axios';
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

const AddCourse = () => {

  useEffect(() => {
    
    document.title = "Add Courses || Learn React"

  }, []);

  const [course, setCourse] = useState([]);

  const handleFormSubmit=(e)=>{

    postDataToServer(course);

    e.preventDefault();
  }


  const postDataToServer =(data)=>{

    axios.post(`${base_url}/add`, data).then(

      (response)=>{

        toast.success("Data Added Sucessfully.")

      },

      (error)=>{

        toast.error("Error 404 !")
      }
    )

  }



  return (
    <>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Course Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter here"
            name="userId"
            required
            onChange={(e)=>{
              setCourse({...course, id:e.target.value});
            }}
          />
        </div>
        <div>
          <label htmlFor="title" className="form-label">
            Course Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title here"
            name="title"
            required
            onChange={(e)=>{
              setCourse({...course, title:e.target.value});
            }}
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            placeholder="Enter description here"
            id="description"
            style={{ height: "100px",}}
            required
            onChange={(e)=> {
              setCourse({...course, description: e.target.value});
            }}
          ></textarea>
        </div>

        <Container className="text-center mt-2 mx-2">
            <Button type="submit" color="success" className="mx-2">Add Course</Button>
            <Button color="warning" type="reset">Clear</Button>
        </Container>
      </form>
    </>
  );
};

export default AddCourse;
