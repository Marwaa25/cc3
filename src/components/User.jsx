import React from 'react'


export default function User(props) {
  return (
    <div className='user'>
        <img src={require("../images/login.png")} />
        <div>
            <div>{props.nom}</div>
            <button className='btn1' onClick={props.details}>Detail User</button>
            <button className='btn2' onClick={props.listeTaches}>Liste des tâches</button>
        </div>
    </div>
  )
}