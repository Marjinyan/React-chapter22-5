import { useLocation } from "react-router-dom"

const Contacts = () => {
    const current = useLocation()
    console.log(current) //{hash:"", pathname:"/contacts", state:null, search:""}
    
    return <div>
        <h1>Contacts</h1>
    </div>
}
export default Contacts