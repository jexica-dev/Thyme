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

  return (
    <div className="leaf-container">
      {props.leaves.map((leaf, index) => {
        const { message } = leaf.fields;
        return (
          <article>
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
            {/* // NEED TO FIX EDIT BUTTON // */}
            {/* <Link to={`/edit/${leaf.id}`}>~</Link> */}
          </article>
        );
      })}
    </div>
  );
}
export default Leaf;
