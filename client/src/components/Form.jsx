import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import { baseURL, config } from "../services";

function Form(props) {
  const [message, setMessage] = useState("");

  const params = useParams();

  useEffect(() => {
    if (params.id && props.leaves.length > 0) {
      const leafToEdit = props.leaves.find((leaf) => params.id === leaf.id);
      if (leafToEdit) {
        setMessage(leafToEdit.fields.message);
      }
    }
  }, [params.id, props.leaves]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newLeaf = {
      message,
    };
    await axios.post(baseURL, { fields: newLeaf }, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h4>leaf</h4>
        <div>
          <label id="name">message</label>
          <input value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default Form;
