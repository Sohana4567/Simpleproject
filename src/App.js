import React, { useEffect,useState } from 'react';
import './styles.css';
import axios from 'axios'
function App() {

const [fetchname,setFetch]=useState([]);
const [username,setUsername]=useState("");

useEffect(()=>{
 axios
  .get(`https://api.github.com/users/\${Sohana4567}\/repos`)
     .then(res=>{
       setFetch(res.data)
     })
     .catch(err=>{
        console.log(err);
      })
      
},[])

function handleSubmit(e){
  e.preventDefault();
  var filtername=
  fetchname.filter((filtername)=>filtername.name===username).sort((a,b)=>b-a);
  
  setFetch([...filtername])

}

  return (
   
    <div className="App">
      <form className="input" onSubmit={handleSubmit}>
        <label htmlFor="username">Github username: </label>
        <input id="username" type="text" value={username}  onChange={(e)=>setUsername(e.target.value)}/>
        <label htmlFor="fork">Include forks: </label>
        <input id="fork" type="checkbox"/>
        {username===""?<button disabled>Submit</button>:<button>Submit</button>}
      </form>
      { username===""?<div className="error">Not Found</div>:
     <section>
     <header>
       <div className="col">Name</div>
       <div className="col">Language</div>
       <div className="col">Description</div>
       <div className="col">Size</div>
     </header>
     {
   fetchname.map(tablename=>(
     <div key={tablename.id}>
     <div className="col">{tablename.name}</div>
     <div className="col">{tablename.username}</div>
     <div className="col">{tablename.email}</div>
     <div className="col">{tablename.id}</div>
     </div>
   ))}
   </section>}
      
    </div>
  );
}

export default App;
