import React, {Component} from 'react';
import './App.css';

import Title from './components/Title/Title'
import InputComponent from './components/InputComponent/InputComponent'
import Details from './components/Details/Details'

const API_KEY = '1UqQf495bLb7x3cVHjZgBJVLiB6jr7z9'
const API = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&city=`

class App extends Component {
   state = {
     myResults: []
   }

   events = (e) => {
     e.preventDefault()
     const city = e.target[0].value
     const API_URL = API + city   
     fetch(API_URL)
     .then(results => {
       return results.json()
     }).then(data => {
       let myResults = data._embedded.events.map((info, index) => {
         return(
           <div className='container-holder' key={index}>
             <img width={319} height={160} className='image-holder'src={info.images[6].url} alt='pic'/>
             <div class='common'>{info.name}</div>
             <div class='common'>Date: {info.dates['start'].localDate}</div>
             <div class='common'>{info._embedded.venues[0].name}</div>
             <div class='common'><a href={info.url} target="_blank">Purchase a Ticket</a></div>
           </div>
         )
       })
       this.setState({
         myResults: myResults
       })
     }) 
   }
   
  render() {
    return (
      <div>
        <Title />
        <InputComponent getEvents={this.events}/>
        <Details toShow={this.state.myResults}/>
      </div>
    );
  }
}
export default App;
