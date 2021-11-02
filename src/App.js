//import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import {FormControl,Input,InputLabel,IconButton} from '@material-ui/core';
// import { FormControl, InputLabel, Input } from '@mui/material';
import SendIcon from '@material-ui/icons/Send'
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';




function App() {

  
  const [input, setInput]= useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  // console.log(input);
  // console.log(messages); 

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
    setMessages(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()})))
  })

  },[] )



  useEffect(() => {
    setUsername(prompt("Please enter your name"));
    
  }, [])

  const sendMessage = (event)=>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    
    setInput('');

  }
  return (
    <div className="App">
      <img src="https://scontent.fhou1-2.fna.fbcdn.net/v/t39.2365-6/125045888_365208298119393_118314348322316603_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=uXWRSnJg6HMAX8baRts&_nc_ht=scontent.fhou1-2.fna&oh=42abd299dfa89965dc970be57eaa579a&oe=617A3D2E" style={ {height:'100px' , width:'100px'}}/>
      <h1>Hello programmers 🚀 </h1>
      <h2>Welcome {username}</h2>

      <form className='App__form'>
       <FormControl className='app__fromControl'>
    <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

    <IconButton className='app__iconButton' disabled ={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>

  <SendIcon />
  </IconButton>
      {/* <Button disabled ={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button> */}
     
    </FormControl> 
      
      </form>
      <FlipMove>

      {
        messages.map(({id, message}) =>(
          
            <Message key={id} username={username}  message={message}/>
        
          
          
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
