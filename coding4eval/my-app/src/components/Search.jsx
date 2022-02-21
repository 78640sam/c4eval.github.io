import { useNavigate } from "react-router-dom"
import "./Search.css"
export const Search=() =>{
    const navigate=useNavigate();
    return (
        <>
        <div>
        <img className="search-box-img" src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="google" /><br></br>
            <input type="text" placeholder="Search google" value="" className="search-box" onKeyPress={()=>{navigate("/search")}} />
            </div>
        </>
    )
}