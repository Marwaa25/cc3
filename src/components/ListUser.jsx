import React from 'react'
import { useSelector } from 'react-redux';

export default function ListUser() {

  const Selecteduser = useSelector(state => state.country.selectedUser);
  const listTaches = useSelector(state => state.tache.data).filter(item => item.user===Selecteduser);

  return (
    <div>

        <h1>Liste des utilisateurs</h1>
        {listTaches.length!==0 && 
            listTaches.map(item => <h2>{item.name}</h2>)
        }
    </div>
  )
}
