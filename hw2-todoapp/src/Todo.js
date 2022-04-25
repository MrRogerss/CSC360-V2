
import React,{useState} from "react";

export default function Todo({ title, description,dateCreated}) {
    const[checked, setChecked] = React.useState(false);
    const[date,setDate] = React.useState(false);

    const handleChange = () =>{

        setChecked(!checked);
        if(checked ==false)
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

      </div>

      
    </div>
  );
}