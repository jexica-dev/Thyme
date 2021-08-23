import "../App.js";
import {
  useParams,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";

function Leaf(props) {
  const params = useParams();

  const deleteLeaf = async () => {
    await axios.delete(`baseURL/${props.leaves.records.id}`);
  };

  return (
    <div>
      <h1>leaves</h1>
      {props.leaves.map((leaf, index) => {
        const { message } = leaf.fields;
        return (
          <article>
            <h3>{message}</h3>

            <Link to={`/edit/${leaf.id}`}>e</Link>
            <br />
            <button onClick={deleteLeaf}>trim</button>
          </article>
        );
      })}
    </div>
  );
}

export default Leaf;
