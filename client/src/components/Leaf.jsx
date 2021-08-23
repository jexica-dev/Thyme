import "../App.js";
import { useParams, Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Leaf(props) {
  const params = useParams();
  console.log(props.leaves.id);

  const deleteLeaf = async () => {
    await axios.delete(`${baseURL}/${props.leaves}`, config);
    props.setToggleFetch(!props.toggleFetch);
  };
  {props.leaves.map((leaf, index) => {
  return (
    <div>
      {props.leaves.map((leaf, index) => {
        const { message } = leaf.fields;
        return (
          <article>
            <h3>{message}</h3>

            <button onClick={deleteLeaf}>trim</button>
            <br />

            <Link to={`/edit/${leaf.id}`}>~</Link>
          </article>
        );
      })}
    </div>
  );
}

export default Leaf;
