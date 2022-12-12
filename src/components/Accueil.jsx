import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListUser';
import ListToDo from './ListToDo';
import DetailsUsers from './DetailUser';
export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailsUsers />} />
                <Route path='/ListeToDo/:id' element={<ListToDo/>} />
            </Routes>
        </div>
    )
}