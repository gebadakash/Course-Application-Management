import { useEffect } from "react";
import { Button } from "react-bootstrap";

const Home = () => {

  useEffect(() => {
    
    document.title = "Home Page"

  }, []);


  return (
    <div className="text-center">
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title display-3">Learning React...</h5>
          <p className="card-text">
           This is small course project developed by akash using
           Sping as backend and React as Front end.
          </p>
          <Button color="primary">Button</Button>
        </div>
      </div>
    </div>
  ); 
};

export default Home;
