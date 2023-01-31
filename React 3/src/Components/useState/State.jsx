import React from 'react'
import { useState, useEffect } from 'react'

export default function State() {

    let [num, setNum] = useState(0)
    let [name, setName] = useState('Saad')
    useEffect(() => {
        console.log('Dekho main bin bulaaye chal gaya ' + new Date())
    }, [num])
    useEffect(() => {
        console.log('Dekho main phr chal gaya ' + new Date())
    }, [name])

    let [users, setUsers] = useState([
        { name: 'Saad', age: 23, roll: 'CSC-20S-088' },
        { name: 'Basit', age: 23, roll: 'CSC-20S-089' },
        { name: 'Unknown', age: 23, roll: 'CSC-20S-090' },
    ])
    let changeUsers = () => {
        let newUser = {
            name : 'Hammad',
            age : 27,
            roll : 'CSC-20S-071'
        }
        setUsers([...users,newUser])
    }
    // let [num, setNum] = useState(0)
    return (
        <div>
            <h1>{num}</h1>
            <h1>{name}</h1>
            <button onClick={() => { setNum(num += 1) }}>Update Num</button>
            <button onClick={() => { setName('Mohammad Saad Ali') }}>Change Name</button>
            {/* {users.map((user, index) => {
                return <div key={index}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                    <h1>{user.roll}</h1>
                </div>
            })}
            <button onClick={changeUsers}>Update users</button> */}
            {/* <h1>{num}</h1>
            <button onClick={() => { setNum(num += 1) }}>Increment</button>
            <button onClick={() => { setNum(num -= 1) }}>Decrement</button> */}
        </div>
    )
}
