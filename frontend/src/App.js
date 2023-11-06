
import React, { useState, memo, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Register from "./Register";
import ChatsPage from "./Chats";

function App() {


  const[user,setUser]=useState()

    if(!user){
      return <Register onAuth={(user)=>setUser(user)}></Register>
    }else{
      return <ChatsPage user={user}></ChatsPage>
    }
}

export default memo(App);
