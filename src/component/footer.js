import { useContext, useEffect, useState } from "react";
import { AssestContext } from "../context/assestcontext";
import { Apicontext } from "../context/apicontext";

function Footer(){
    const{run}=useContext(Apicontext);
    const[form,setformdata]=useState("")
    const{gallery_icon,mic_icon,send_icon,previous,setpre,setrev,revarr}=useContext(AssestContext);
    function changehandler(event){
        setformdata(event.target.value)
    }
    function submithandler(e){
        
        e.preventDefault();
        run(form) 
        setpre((prev)=>[...prev,form]);
        setformdata("")
        setrev(()=>{
            const rev=previous.reverse();
            const arr=rev.slice(0,4);
            return arr;
        })
        
       
        
    }
  
    return(
        <form onSubmit={submithandler} className=" flex justify-center items-center w-full h-auto ">
            <label className=" relative flex">
                <input value={form} name="prompt" onChange={changehandler} className="  bg-gray-300 w-[47rem] text-start p-2 rounded-xl h-[3.5rem] focus:bg-opacity-65 outline-none" placeholder="Enter the Prompt here">
                </input>
                {
                    form?(<div className="w-[14rem] items-center absolute transition-all duration-600 flex gap-3 z-[1] top-2 left-[38rem]">
                        <button className="p-1  rounded-[50%] hover:bg-gray-300" ><img src={gallery_icon} width={30} height={30}></img></button>
                        <button className="p-1  rounded-[50%] hover:bg-gray-300"><img src={mic_icon} width={30} height={30}/></button>
                        <button type="submit" onClick={submithandler} className="p-1  rounded-[50%] hover:bg-gray-300"><img src={send_icon} width={30} height={30}/></button>
                    </div>):(
                        <div className="absolute flex gap-3 items-center z-[1] transition-all duration-600 w-[10rem] top-2 left-[39rem]">
                    <button className="p-1  rounded-[50%] hover:bg-gray-300" ><img src={gallery_icon} width={30} height={30}></img></button>
                    <button className="p-1  rounded-[50%] hover:bg-gray-300"><img src={mic_icon} width={30} height={30}/></button>
                </div>

                    )
                }
            </label>
        </form>
    )
}
export default Footer;