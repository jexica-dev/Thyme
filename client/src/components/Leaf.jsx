import "../App.js";
import { useParams, Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import "./Leaf.css";

function Leaf(props) {
  const params = useParams();
  //

  const deleteLeaf = async (id) => {
    await axios.delete(`${baseURL}/${id}`, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  // create a new array
  const nameArr = props.leaves.filter((leaf) => {
    if (leaf.fields.loginName.toLowerCase() === props.loginName.toLowerCase()) {
      return true;
    }
    return false;
  });

  return (
    <div className="leaf-container">
      {nameArr.map((leaf, index) => {
        const { message } = leaf.fields;
        return (
          <article className="leaf-article">
            <h3>{message}</h3>

            <img
              width="30px"
              src="https://i.imgur.com/4AxW1cZ.png"
              alt="trim"
              onClick={() => {
                deleteLeaf(leaf.id);
              }}
            />
            <br />
          </article>
        );
      })}
    </div>
  );
}
export default Leaf;
