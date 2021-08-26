import "../App.js";
import { useParams, Route, Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import "./Thymeline.css";

function Thymeline(props) {
  const params = useParams();
  //

  const thymeUp = async (id) => {
    await axios.put(`${baseURL}/${id}`, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  return (
    <div className="thymeline-container">
      {props.leaves.map((leaf, index) => {
        const { time } = leaf.createdTime;
        const { message } = leaf.fields;

        return (
          <article className="thymeline-article">
            <h3>{message}</h3>
            <h5>{time}</h5>
            <br />
          </article>
        );
      })}
    </div>
  );
}
export default Thymeline;
