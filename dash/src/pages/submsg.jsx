import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './supabase';
const SubMsg = () => {
    const {id} =useParams
    const [data, setData] = useState("")
    useEffect(()=>{
  async function callRow(){
     const res =await supabase.from("contactmeMsg").select("*").eq("id",id);
     setData(res.data[0]);
     }
  callRow()
    },[])
    return ( <>
    <p>ID:{id}</p>
    <h1>title: {data.title}</h1>
    <h3>email:{data.email} </h3>
    <p>Msg:{data.msg} </p>
    </> );
}
 
export default SubMsg;