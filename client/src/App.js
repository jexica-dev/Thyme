import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import { baseURL, config } from "./services";

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
  }, []);

  return (
    <div className="body">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new"> new leaf</Link>
      </nav>

      <Route path="/" exact>
        <h1>leaves</h1>
        {leaves.map((leaf, index) => {
          const { message } = leaf.fields;
          return (
            <article>
              <h3>{message}</h3>

              <Link to={`/edit/${leaf.id}`}>Edit</Link>
            </article>
          );
        })}
      </Route>

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
