import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Form.css";
import { baseURL, config } from "../services";

function Form(props) {
  const [message, setMessage] = useState("");

  const params = useParams();

  // NEED TO FIX EDIT __

  // useEffect(() => {
  //   if (params.id && props.leaves.length > 0) {
  //     const leafToEdit = props.leaves.find((leaf) => params.id === leaf.id);
  //     if (leafToEdit) {
  //       setMessage(leafToEdit.fields.message);
  //     }
  //   }
  // }, [params.id, props.leaves]);

  // NEED TO FIX EDIT ^^^

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLeaf = {
      message,
    };
    await axios.post(baseURL, { fields: newLeaf }, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>leaf</h4>
      <div>
        <label id="name">message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
}

export default Form;
