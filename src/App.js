import './App.css';
import React, { useState } from "react";
import Axios from "axios"
import RecipeTile from './RecipeTile';

function App() {
  
  const [query, setquery] = useState("")
  const [recipe, setRecipe] = useState([])
  const [option, setoption] = useState("vegan")
  const YOUR_APP_ID = "466ea611";
  const YOUR_APP_KEY="ce3110bc2e7b6ba9e659c2aeadd2b6e0";
  let url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${option}`;
  
  const reload=(e)=>
    {
      e.preventDefault();
      getRecipe();
      console.log(url);
    }

  async function getRecipe(){
    let res=await Axios.get(url);
    setRecipe(res.data.hits);
    console.log(res.data);
    console.log(option);
  }

  return (
    <div className="App">
      <h1>Recipe List</h1>
      
      <form onSubmit={reload} className="App_form">
        <input required className="App_input" value={query} onChange={(e)=>setquery(e.target.value)} placeholder="Enter name of ingredient"/>
        
        <select onChange={(e)=>setoption(e.target.value)} className="App_dropdown">
          <option>vegan</option>
          <option>dairy-free</option>
          <option>egg-free</option>
          <option>gluten-free</option>
          <option>no-oil-added	</option>
          <option>low-sugar	</option>
        </select>
        <input className="App_submit" type="submit"/>
      </form>
      <div className="App_recipe">
        {recipe.map((element)=>{
          return <RecipeTile recipe={element}/>;
        })}
      </div>    
    </div>
  );
}

export default App;
