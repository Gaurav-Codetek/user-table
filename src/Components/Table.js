import React, { useEffect, useState } from 'react'
import HoriNavbbar from './HoriNavbbar'
import axios from 'axios'

const heading = [
    { headName: 'Name', id: 1 },
    { headName: 'Username', id: 2 },
    { headName: 'E-mail', id: 3 },
    { headName: 'Website', id: 4 }
]

export default function Table(props){

    const[data, setData] = useState([])
    const[record, setRecord] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=> {
            setData(res.data) 
            setRecord(res.data)
        }).catch(err=> console.log(err));

    }, [])

    const renderTableHeader = heading.map(d=>
        <th key={d.id}>
            {d.headName}
        </th>
    )

    const renderTableRows = record.map(a=>
        <tr key={a.id}>
            <td>{a.name}</td>
            <td>{a.username}</td>
            <td>{a.email}</td>
            <td>{a.website}</td>
        </tr>
        )

        const searchList = (event)=>{
            setRecord(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
        }
        return (
            <>
            <input type="text" className='search' onChange={searchList} placeholder='Search for influencer'/>
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