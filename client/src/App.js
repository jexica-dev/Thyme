import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Leaf from "./components/Leaf";
import ScrollToTop from "react-scroll-to-top";
import Thymeline from "./components/Thymeline.jsx";

function App() {
  const [leaves, setLeaves] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    //GET request
    const getLeaves = async () => {
      const resp = await axios.get(baseURL, config);
      setLeaves(resp.data.records);
      console.log(resp);
    };
    getLeaves();
  }, [toggleFetch]);

  return (
    <div className="body">
      <div className="thyme-logo">
        <Link to="/" exact>
          <h1>thyme</h1>
        </Link>
      </div>
      <nav>
        <br />
        <Link className="leaf-link" to="/new">
          new leaf
        </Link>
        <Link className="thymeline" to="/thymeline">
          thyme-line
        </Link>
      </nav>

      <div className="flex-container">
        <Route path="/" exact>
          <Leaf
            leaves={leaves}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/thymeline">
          <Thymeline
            leaves={leaves}
            setToggleFetch={setToggleFetch}
            toggleFetch={toggleFetch}
          />
        </Route>

        <Route path="/edit/:id">
          <Form leaves={leaves} />
        </Route>

        <Route path="/new">
          <Form
            leaves={leaves}
            setToggleFetch={setToggleFetch}
            toggleFetch={toggleFetch}
          />
        </Route>

        <ScrollToTop showUnder={160}>
          <span>UP</span>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
