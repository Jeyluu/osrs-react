import React from 'react'
import './Characters.css'
import { FaChevronDown } from 'react-icons/fa'
import warriorStuff from '../Assets/warriorEquip.png'
import mageStuff from '../Assets/wizardEquip.png'
import rangeStuff from '../Assets/rangerEquip.png'

export default function Characters() {

    const characterBoard = [{
        type:"Warrior",
        attack: "melee",
        stuff: warriorStuff
    },{
        type:"Wizard",
        attack: "magic",
        stuff: mageStuff
    },{
        type:"Ranger",
        attack: "range",
        stuff: rangeStuff
    }]
    console.log(characterBoard);



    return (
        <>
        <div className="character-card">
            <div className="standard">
                
                    <h2>Warrior's</h2>
                    <button className="show-btn"><FaChevronDown/></button>
                <div className="show">
                
                    <p>{characterBoard[0].attack}</p>
                    <img src={characterBoard[0].stuff} alt="test"/>
                
                </div>
            </div>
            <div className="standard">
                
                    <h2>Warrior's</h2>
                    <button className="show-btn"><FaChevronDown/></button>
                <div className="show">
                
                    <p>{characterBoard[0].attack}</p>
                    <img src={characterBoard[0].stuff} alt="test"/>
                
                </div>
            </div>
            <div className="standard">
                
                    <h2>Warrior's</h2>
                    <button className="show-btn"><FaChevronDown/></button>
                <div className="show">
                
                    <p>{characterBoard[0].attack}</p>
                    <img src={characterBoard[0].stuff} alt="test"/>
                
                </div>
            </div>
        </div>
            
            
            
        </>
    )
}
