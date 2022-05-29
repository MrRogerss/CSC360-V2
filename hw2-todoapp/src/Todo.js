
import React,{useState} from "react";

export default function Todo({ title, description,dateCreated,dateCompleted,id,deleteTodo},dispatch) {
    const[checked, setChecked] = React.useState(false);
    var[date,setDate] = React.useState(false);

    const handleChange = () =>{

        setChecked(!checked);
        if(checked == false)
        {
          setDate(new Date().toLocaleString());
        }
        else
        {
            setDate("");
        }
           
    }
  return (
    <div>
      <h3>{title}</h3>
      <div>{description}</div>
      <br />
      <i>
        Date Created: <b>{dateCreated}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Date Completed:  <b>{date}</b>
      </i>
      <br/>
      <div>
          <label>
          Completed 
          <input 
          type = "checkbox"
          checked = {checked}
          onChange = {handleChange}
          />

          </label>
          <input type = "button" value = "Delete this Todo" onClick ={() => deleteTodo(id)}/>

      </div>

      
    </div>
  );
}