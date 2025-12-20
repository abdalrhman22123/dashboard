import React, { useState } from 'react';
import { supabase } from './supabase';

const Contact = () => {
    const [title, setTitle] =useState("");
    const [email, setEmail] =useState("");
    const [msg, setMsg] =useState("");

async function sendTitle(){
    const res = await supabase.from("contactmeMsg").insert({"title":title,"email":email, "msg":msg});
}
async function sendEmail(){
    const res = await supabase.from("contactmeMsg").insert({"title":title,"email":email, "msg":msg});
}
async function sendMsg(){
    const res = await supabase.from("contactmeMsg").insert({"title":title,"email":email, "msg":msg});    
}
    return ( <>
    <form >
      <label>title</label>
      <input onChange={(i)=>{setTitle(i.target.value)}} type="text" />
      <label>email</label>
            <input onChange={(i)=>{setEmail(i.target.value)}} type="text" />
      <input type="text" />
      <label>Msg</label>
            <input onChange={(i)=>{setMsg(i.target.value)}} type="text" />
      <textarea name="" id=""></textarea>
    <button>send</button>
      
    </form>
    <button onClick={sendTitle}>test value</button>
    </> );
}
 
export default Contact;