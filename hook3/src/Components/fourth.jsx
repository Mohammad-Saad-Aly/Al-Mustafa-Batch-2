import React, { useContext } from 'react'
import { NameContext } from '../App'

export default function Fourth() {
let abc = useContext(NameContext)
    return (
    <div>
        <h1>{abc}</h1>
        I am a Component
    </div>
  )
}
