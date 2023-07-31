import React, { useState } from 'react'
import Chetan from './TB.png'
import Secure from './shield.png'

const profile = {
    Name: 'Chetan B',
    Designation: 'Brand',
    Imageurl: { Chetan },
    Imagesize: '40px'
}

export default function ProfileBar() {
    const [classList, setClassList] = useState("innerProfileNeg");

    return (
        <>
        
            <div className="profile-bar">
            <div className="tab-phone">
                    <img className='top-logo' src={Chetan} alt="Logo" height='50px' width='50px' />
                    <img className='top-secure' src={Secure} alt="Security" height='50px' width='50px' />
                </div>
                
                <button className='profile' onClick={() => setClassList("innerProfile")}>
                    <img src={Chetan} alt={profile.Name} height={profile.Imagesize} width={profile.Imagesize} />
                    <p><b>{profile.Name}</b> <br /> {profile.Designation}</p>
                    <p className='downArrow'>&#9497;</p>
                </button>
                <div className={classList}>
                    <ul>
                        <li><a href="./">Dashboard</a></li>
                        <li><a href="./">Summary</a></li>
                        <li><a href="./">Log Out</a></li>
                    </ul>
                    <div className="close" onClick={() => setClassList("innerProfileNeg")}>
                        <p>^</p>
                    </div>
                </div>
            </div>
        </>
    );
}