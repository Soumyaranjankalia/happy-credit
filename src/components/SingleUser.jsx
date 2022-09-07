import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export const SingleUser = () => {
    
    const {id} = useParams()
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=>setUser(res.data))
        .catch(err=>console.log(err))
    },[id])

  return (
    <div>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
        <h4>{user.phone}</h4>
        <Link to="/"><button className="btn">Back</button></Link>
    </div>
  )
}
