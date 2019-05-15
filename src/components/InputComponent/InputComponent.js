import React from 'react';
import './InputComponent.css'

function InputComponent(props) {
  return (
    <form className='form-holder' onSubmit={props.getEvents}>
      <input className='input-holder'  type='text' name='city' placeholder='City'/>
      <button className='button' >Search</button>
    </form>
  );
}

export default InputComponent;
