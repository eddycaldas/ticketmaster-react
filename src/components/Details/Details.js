import React from 'react';
import './Details.css';

function Details(props) {
  return (
    <div className='show-container'>
      {props.toShow}
    </div>
  );
}

export default Details;
