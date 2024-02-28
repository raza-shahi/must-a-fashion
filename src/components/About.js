import React, { useState } from 'react'

export default function About() {
     const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    } )

    const [btnText,setBtnText] = useState("Enable dark mode")

    const colorChanger=()=>{
       if (myStyle.color==='black') {
                setMyStyle({
                        color:'white',
                        backgroundColor:'black'
                    });
                    setBtnText("enable light mode")
             }
         else{
            setMyStyle({
                color:'black',
                backgroundColor:'white'
                });
                setBtnText("enable dark mode")
            }
    }

    return (

        <div className="container" style = {myStyle}>
            <h1 className="my-3">About Us</h1>
            <p className="border">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio repellat cumque, deleniti 
             amet, accusantium 
                 eaque nostrum consectetur quos laudantium, cum nisi rem!
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem atque, nobis eaque et alias ducimus in est quibusdam quia 
                  itaque ipsam ut cum dolorum aperiam quaerat repellat iste id ea officia, placeat similique illo.</p>
            <div className="container my-3">
            <button onClick={colorChanger} type="button"  className="btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
