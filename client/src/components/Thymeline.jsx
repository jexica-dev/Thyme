import '../App.js';
import { useParams, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { baseURL, config } from '../services';
import './Thymeline.css';

function Thymeline(props) {
  const params = useParams();

  const deleteLeaf = async (id) => {
    await axios.delete(`${baseURL}/${id}`, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  // Add early return if leaves is not available
  if (!props.leaves || !Array.isArray(props.leaves)) {
    return <div className="thymeline-container">Loading...</div>;
  }

  const sortedLeaves = [...props.leaves].sort((a, b) => {
    let aDate = new Date(a.createdTime);
    let bDate = new Date(b.createdTime);

    if (aDate < bDate) {
      return 1;
    } else if (bDate < aDate) {
      return -1;
    } else {
      return 0;
    }
  });

  // Add safety check for loginName
  const nameArr = sortedLeaves.filter((leaf) => {
    if (!props.loginName || !leaf.fields?.loginName) {
      return false;
    }
    return (
      leaf.fields.loginName.toLowerCase() === props.loginName.toLowerCase()
    );
  });

  return (
    <div className="thymeline-container">
      {nameArr.map((leaf, index) => {
        const { message } = leaf.fields;
        const dateFormat = require('dateformat');
        const newDate = dateFormat(
          leaf.createdTime,
          'ddd, mmmm dS, yyyy, h:MM:ss TT',
        );

        return (
          <article className="thymeline-article" key={leaf.id || index}>
            <h3>{message}</h3>
            <h5>{newDate}</h5>

            <img
              id="scissors"
              width="25px"
              src="https://i.imgur.com/4AxW1cZ.png"
              alt="trim"
              onClick={() => {
                deleteLeaf(leaf.id);
              }}
            />
          </article>
        );
      })}
    </div>
  );
}

export default Thymeline;
