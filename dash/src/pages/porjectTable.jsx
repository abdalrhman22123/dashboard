import React, { useState } from 'react';
import "./projectTable.css"
import { supabase } from './supabase';
const ProjectTable = () => {
    const[loading, setloading] =useState(true);
    const[project, setprojects] =useState("");
    
    
    useState (()=>{
        setloading(false);

     async function getallprojectAPI(){
        const res = await supabase.from ("projects").select("*");
        setprojects(res.data);
        //console.log(res);
     }
     getallprojectAPI()
    },[]);

    if (loading) return <p>loading...</p>;

    return ( <>
    {console.log(project)}
    <table>
        <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>created_at</th>
      </tr>  
        </thead>
     <tbody>
        <tr>

        </tr>
     </tbody>





      {
        project.map ((projects)=>{
          return  <tr>
          <td>{projects.id}</td>
          <td>{projects.title}</td>
          <td>{projects.created_at}</td>
          </tr>
    })
      }

    </table>
    </> );
}
 
export default ProjectTable;