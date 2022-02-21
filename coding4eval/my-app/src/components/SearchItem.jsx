import "./SearchItem.css";
 import {useState,useEffect} from "react";


export const SearchItem=() =>{
    let [datas,setData]=useState([]);
 useEffect(() =>{
     fetch('https://fast-reef-22226.herokuapp.com/data').then((response)=>response.json()).then((el)=>setData(el.data));
     console.log(datas)
 },[]);
 console.log(datas)


    return (
        <>
        <div id="navbar" >
        <img className="search-box-img1" src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="google" /><br></br>
            <input type="text" placeholder="Search google" value="" className="search-box1" />
            <button className="search" >Search</button>
            </div><br></br>
            <div id="btn1">
                <button>Sort A-Z</button>
                <button>Sort Z-A</button>
                <button>Sort by Date (Asc)</button>
                <button>Sortby Date (Desc)</button>
                <button>Sort by Quality (Ase)</button>
                <button>Sort by Quality (Dese)</button>
                <button>Filter Explicit</button>
            </div>
            <br></br>
            {/* <div>
                {datas.map(el)=>{
  <p>{data.url}</p>
  <h5>{title}</h5>
                }
            </div> */}

        </>
    )
}