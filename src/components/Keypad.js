import React from 'react'

function Keypad () {

    function password(){
        console.log("Entering password...")
    }

    return (
        <div>
            <h3>Enter Password Here</h3>
            <input type="password" onChange={password}></input>
        </div>
    )
}

export default Keypad 
