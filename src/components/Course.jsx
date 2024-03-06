import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,

} from "reactstrap";

import axios from 'axios';
import base_url from "../api/BootApi";
import { toast } from "react-toastify";

const course = ({course, update}) => {


  const deleteCourse = (id) =>{
    axios.delete(`${base_url}/delete/${id}`).then(
      (response)=>{

        toast.success("Course Deleted SucessFully..")
        update(id);
      },
      (error)=>{

        toast.error("Error 404 ! Server Offline")
      }
    )

  }


  return (
    <Card className="text-center">
        <CardBody>
            <CardSubtitle style={{fontWeight:"bold"}}>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=> {deleteCourse(course.id)}}>Delete</Button>
                <Button color="warning" className="m-3">Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
};

export default course;
