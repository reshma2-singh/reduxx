import React,{useState} from 'react'
import {useSelector,useDispatch} from "react-redux";
import {userUpdate} from '../reducer/userSlice'
function UserDetails() {
    const[textBoxValue,setTextBoxValue]= useState("")
    const[comboBoxValue,setcomboBoxValue]= useState("")
    const dispatch=useDispatch()
    const userInformation = useSelector(state=>state.user);
    const{name,age,location,profession}=userInformation;
   
    const handleSubmit=()=>{
        if(!!comboBoxValue && !!textBoxValue){
            dispatch(userUpdate({key:comboBoxValue,value:textBoxValue}))

        }

    }
  return (<>
    <div>
        <div>Name:{name}</div>
        <div>Age:{age}</div>
        <div>Location:{location}</div>
        <div>Proffesion:{profession}</div>
    </div>
    <div>
        <select onChange={e=>setcomboBoxValue(e.target.value)}>
            <option value="name">Name </option>
            <option value="age">Age </option>
            <option value="location">Location </option>
            <option value="profession">Proffesion </option>
        </select>
        <input type="text" value={textBoxValue} onChange={e=>setTextBoxValue(e.target.value)}/>
        <button onClick={()=>handleSubmit()}>Submit</button>
    </div>
    </>
  )
}

export default UserDetails