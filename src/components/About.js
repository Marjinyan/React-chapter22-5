import { useEffect, useState } from "react"
import { Navigate, useHref } from "react-router-dom"

const About = () => {
    const [user, setUser] =useState(null)
    const url = useHref("/contacts")

    useEffect(() => {
        fetch("https://randomuser.me/api")
            .then(response => response.json())
            .then(data => setUser(data.results[0]))
    }, [])

    return <div>
        <h1>About</h1>
        {user && <Navigate to={url} state={user} /> }
    </div>
} 
export default About