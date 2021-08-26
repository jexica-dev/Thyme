import "../App.js";
import { useParams, Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import "./Thymeline.css";

function Thymeline(props) {
  const params = useParams();
  //

  const deleteLeaf = async (id) => {
    await axios.delete(`${baseURL}/${id}`, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  return (
    <div className="thymeline-container">
      {props.leaves.map((leaf, index) => {
        const { message } = leaf.fields;
        const { date } = leaf.createdTime;

        const newDate = dateFormat(
          leaf.createdTime,
          "ddd, mmmm dS, yyyy, h:MM:ss TT"
        );

        return (
          <article className="thymeline-article">
            <h3>{message}</h3>
            <h5>{newDate} </h5>
            <br />
            <Link
              onClick={() => {
                deleteLeaf(leaf.id);
              }}
            >
              trim
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export default Thymeline;
