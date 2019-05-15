import React from 'react';
//import './App.css';
function InputComponent(props) {
  return (
    <form onSubmit={props.getEvents}>
      <input type='text' name='city' placeholder='City'/>
      <button>Search</button>
    </form>
  );
}

export default InputComponent;
