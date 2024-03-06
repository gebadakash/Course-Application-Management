import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { Col, Container } from "reactstrap";
import { Row } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus></Menus>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/add-course" Component={AddCourse}></Route>
                <Route path="/view-courses" Component={AllCourses}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
