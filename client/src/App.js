import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import Leaf from "./components/Leaf";

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new"> new leaf</Link>
      </nav>

      <div className="flex-container">
        <Route path="/" exact>
          <Leaf
            leaves={leaves}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>
      </div>

      <Route path="/new">
        <h1>Form</h1>
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
    </div>
  );
}

export default App;
