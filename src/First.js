
import {Button} from 'antd'; 
import styles from './New.css';
import React, { useEffect, useState } from 'react';

export default function First() {
    const [users, setusers] = useState([]);
    const [username,setusername]= useState("");
    const searchuser=() => {
        fetch(`https://api.github.com/users/${username}`)
          .then(res => res.json())
          .then(
            (result) => { 
             const user=[...users];
            user.push(result);
           // console.log(user);
            setusers(user);
            }
          )  
      }
    const changeText=(event)=>{
      setusername(event.target.value)
     // console.log(event.target.value)
    }
    return (
        
       <center> <div className="container">
        {
          //console.log(users)
        }

            <input type="text" placeholder="Enter username"onChange={(text)=> {changeText(text)}}/>
           <span> </span> <Button type="primary" onClick = {() => {searchuser()}}>COMPARE</Button>
            
        </div>
        <div>
            {
                users.map((item)=>{
                    return (
                        <div className="result" >
                        <div ><b>{item.name}</b></div>
                        
                        <div className="result-box">
                         <span>FOLLWERS</span> {item.followers}

                        </div>
                        <div className="result-box">
                           <span>FOLLOWINGS</span> {item.following}
                        </div>
                        <div className="result-box">
                           <span>PUBLIC REPOS</span> {item.public_repos}
                        </div>
                        <div className="result-box">
                           <span>PUBLIC GISTS</span> {item.public_gists}
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </center>
    )
}
