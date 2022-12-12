import React from 'react'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListToDo() {
    const { id } = useParams()
    const listuser = useSelector(state => state.user.data)
    const listtodo = useSelector(state => state.listtodo.data)
    const selectedUser = listuser.users.filter(user => user.id == id)
    const selectedTodo = listtodo.tache.filter(todo => todo.id == id)
    return (
        <div>
            <h1>{`${(selectedUser[0].firstName)} ${(selectedUser[0].lastName)}`} Taches</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Taches</td>
                            <td>State</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedTodo.map(todo => <tr key={todo.id}>
                            <td>
                                {todo.todo}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}