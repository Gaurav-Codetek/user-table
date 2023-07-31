import React from 'react'
import Secure from './shield.png'
import Setting from './setting.png'
import hash from './Minimize.svg'

export default function SideNavbar(props){
    const logoSize = props.size;
    const compoSize = props.compoSize;
    const img = props.img;
    return(
        <>
        <div className="side-nav">
        <img className='logo'src={img} alt="Logo" height={logoSize} width={logoSize} />
        <img className='security' src={Secure} alt="Security" height={logoSize} width={logoSize}/>
        <img className='hash' src={hash} alt="" height={compoSize} width={compoSize}/>
        <img className='setting' src={Setting} alt="Setting" height={compoSize} width={compoSize}/>
        </div>
        </>
    );
}