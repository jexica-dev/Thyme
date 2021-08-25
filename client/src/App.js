import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Leaf from "./components/Leaf";
import ScrollToTop from "react-scroll-to-top";

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
      <nav className="thyme-logo">
        <Link to="/" exact>
          <h1>thyme</h1>
        </Link>
      </nav>
      <nav className="leaf-button">
        <br />
        {/* <button class="button"> */}
        <Link className="leaf-link" to="/new">
          new leaf
        </Link>
        {/* </button> */}
      </nav>

      <div className="flex-container">
        <Route path="/" exact>
          <Leaf
            leaves={leaves}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <ScrollToTop showUnder={160}>
          <span>UP</span>
        </ScrollToTop>
      </div>

      <Route path="/new"></Route>

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
    </div>
  );
}

export default App;
