import React from 'react'
import './App.css'
import { useState } from 'react'

export default function App() {
    const [ addList, setAddList ] = useState([])
    const [ task, setTask ] = useState('')

    // methods
    async function handdleTodo(task) {
        setAddList([
            ...addList,{
                id: Math.floor(Math.random() * 999999),
                title:task
            }
        ])
    }
    async function undoTask(id) {
        setAddList(
            addList.filter( list => {
                return list.id != id
            })
        )
    }
    return (
        <div className="row">
        <div className="col">
            <div className="card">
            <div className="card-title">
                <h3>todo list</h3>
            </div>
            <div className="card-text">
                <ul>
                <li>
                    <input type="text" value={ task } onChange={e => setTask(e.target.value)} />
                    <button onClick={ ()=>handdleTodo(task) }>add task</button>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <div className="card-title">
                    <h3>complited task</h3>
                </div>
                <div className="card-text">
                    <ul>
                        { addList.map( item =>
                        <li key={ item.id }>
                            <span>{ item.title }</span>
                            <button onClick={ ()=> undoTask(item.id) }>undo task</button>
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
        </div>
        
    )
}
