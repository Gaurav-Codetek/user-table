import React, { useState } from 'react'
import Refresh from './reload.png'
import download from './download.png'
import Table from './Table'

export default function HoriNavbbar() {

    return (
        
        <>
            <div className="bg">
                <div className="navbar">
                    <nav>
                        <a href="./" className='active'>Users</a>
                        <a href="./">Campaign</a>
                        <a href="./">Tables</a>
                        <a href="./">List</a>
                    </nav>
                    <img className='refresh' src={Refresh} alt="Refresh" height="20px" width="20px" />
                    <button className="download">
                        <img src={download} alt="Download" height="20px" width="20px" />
                        <p>Download</p></button>
                </div>
                <div className="table">
                    <Table/>
                </div>
            </div>
        </>
    );

}