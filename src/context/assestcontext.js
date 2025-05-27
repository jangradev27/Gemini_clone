import history_icon from '../assets/history_icon.png'
import menu_icon from '../assets/menu_icon.png'
import plus_icon from '../assets/plus_icon.png'
import question_icon from '../assets/question_icon.png'
import setting_icon from '../assets/setting_icon.png'
import bulb_icon from '../assets/bulb_icon.png'
import compass_icon from '../assets/compass_icon.png'
import gallery_icon from '../assets/gallery_icon.png'
import mic_icon from '../assets/mic_icon.png'
import user_icon from '../assets/user_icon.png'
import youtube_icon from '../assets/youtube_icon.png'
import message_icon from '../assets/message_icon.png'
import code_icon from '../assets/code_icon.png'
import send_icon from '../assets/send_icon.png'
import gemini_icon from '../assets/gemini_icon.png'
import React, { useEffect, useState } from 'react'; // Add this import statement
const { createContext } = require("react");

export const AssestContext=createContext();
export function AssestcontetxProvider({children}){ 
    const[revarr,setrev]=useState([]);
    const[isexpand,setexpand]=useState(false);
    
    const[resulttext,setresult]=useState("")
    
    const[previous,setpre]=useState([])
    function hello(){
        console.log('hello jiii');
    }
    const value={revarr,setrev,previous,setpre,
        isexpand,setexpand,
        history_icon,
        menu_icon,resulttext,setresult,
        plus_icon,
        question_icon,setting_icon,
        bulb_icon,
        compass_icon,gallery_icon,mic_icon,user_icon,youtube_icon,message_icon,code_icon,send_icon,gemini_icon
    }
    useEffect(()=>{
        console.log('this is',resulttext)
    },[resulttext]);
    return <AssestContext.Provider value={value}>
    {children}
</AssestContext.Provider>

}