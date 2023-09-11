import React, { useEffect, useState } from 'react'
import HoriNavbbar from './HoriNavbbar'
import axios from 'axios'
import {AiFillCaretDown} from "react-icons/ai"

const heading = [
    { headName: 'Name', id: 1 },
    { headName: 'Username', id: 2 },
    { headName: 'E-mail', id: 3 },
    { headName: 'Website', id: 4 }
]

export default function Table(props) {

    const [data, setData] = useState([])
    const [record, setRecord] = useState([])
    
    const [recorduser, setRecorduser] = useState([])
    
    const [recordemail, setRecordemail] = useState([])
    
    const [recordwebsite, setRecordwebsite] = useState([])

    const[select, setSelect] = useState("Name")
    const[vis, setVis] = useState("sort-OptionNeg")
    const[placeholder, setPlaceholder] = useState('Sort (Default: Name)')
    const[deg, setDeg] = useState("dropdown0deg")
    


    const visi = ()=>{
        if(deg === "dropdown180deg"){
            setDeg("dropdown0deg")
        }
        else{
            setDeg("dropdown180deg")
        }

        if(vis === "sort-Option"){
            return setVis("sort-OptionNeg")
        }

        else{
            return setVis("sort-Option")
        }
    }
    
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setData(res.data)
            setRecord(res.data)
            setRecorduser(res.data)  
            setRecordemail(res.data)
            setRecordwebsite(res.data)
        }).catch(err => console.log(err));

    }, [])

    const renderTableHeader = heading.map(d =>
        <th key={d.id}>
            {d.headName}
        </th>
    )


    const renderTableRows = record.map(a =>
        <>
            <tr key={a.id}>
                <td>{a.name}</td>
                <td>{a.username}</td>
                <td>{a.email}</td>
                <td>{a.website}</td>
            </tr>
        </>
    )

    const searchList = (event) => {
        if(placeholder === "Name"){
        setRecord(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
        }
        else if(placeholder === "Username"){
            setRecord(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
        }
        else if(placeholder === "E-mail"){
            setRecord(data.filter(f => f.email.toLowerCase().includes(event.target.value)))
        }
        else if(placeholder === "Website"){
            setRecord(data.filter(f => f.website.toLowerCase().includes(event.target.value)))
        }
    }
    // const searchUsername = (event) => {
    //     setPlaceholder("Username")
    //     setRecorduser(data.filter(f => f.username.toLowerCase().includes(event.target.value)))
    // }
    // const searchEmail = (event) => {
    //     setPlaceholder("E-mail")
    //     setRecordemail(data.filter(f => f.email.toLowerCase().includes(event.target.value)))
    // }
    // const searchWebsite = (event) => {
    //     setPlaceholder("Website")
    //     setRecordwebsite(data.filter(f => f.website.toLowerCase().includes(event.target.value)))
    // }

    const nameVisi = (event)=>{
        setPlaceholder("Name")
        if(deg === "dropdown180deg"){
            setDeg("dropdown0deg")
        }
        else{
            setDeg("dropdown180deg")
        }

        if(vis === "sort-Option"){
            return setVis("sort-OptionNeg")
        }

        else{
            return setVis("sort-Option")
        }

    }

    const usernameVisi = (event)=>{
        setPlaceholder("Username")
        if(deg === "dropdown180deg"){
            setDeg("dropdown0deg")
        }
        else{
            setDeg("dropdown180deg")
        }

        if(vis === "sort-Option"){
            return setVis("sort-OptionNeg")
        }

        else{
            return setVis("sort-Option")
        }

    }

    const emailVisi = (event)=>{
        setPlaceholder("E-mail")
        if(deg === "dropdown180deg"){
            setDeg("dropdown0deg")
        }
        else{
            setDeg("dropdown180deg")
        }

        if(vis === "sort-Option"){
            return setVis("sort-OptionNeg")
        }

        else{
            return setVis("sort-Option")
        }

    }

    const webVisi = (event)=>{
        setPlaceholder("Website")
        if(deg === "dropdown180deg"){
            setDeg("dropdown0deg")
        }
        else{
            setDeg("dropdown180deg")
        }

        if(vis === "sort-Option"){
            return setVis("sort-OptionNeg")
        }

        else{
            return setVis("sort-Option")
        }

    }



    return (
        <>
        
            <input type="text" className='search' onChange={searchList} placeholder='Search for influencer.' />
            <div className="select" onClick={visi} >
                <p className='placeholder'>{placeholder}</p><AiFillCaretDown className={deg} color='#5f5f5f'/>
            </div>
            <div className={vis}>
                <ul>
                    <li onClick={nameVisi}>Name</li>
                    <li onClick={usernameVisi}>Username</li>
                    <li onClick={webVisi}>Website</li>
                    <li onClick={emailVisi}>E-mail</li>
                </ul>
            </div>
            <table>
                <thead>
                    <tr>
                        {renderTableHeader}
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows}
                </tbody>
            </table>
        </>
    );
}