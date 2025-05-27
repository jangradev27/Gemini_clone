import { Apicontext } from "../context/apicontext";

const { useContext, useState } = require("react")
const { AssestContext } = require("../context/assestcontext")

function Sidebar(){
    const {isexpand,setexpand,plus_icon,question_icon,history_icon,setting_icon,revarr,setpre,setresult}=useContext(AssestContext);
    const{run}=useContext(Apicontext)
    const handlechange=()=>{
        setresult("")
    }
    
    return(
        <div className="min-h-[100vh] flex flex-col items-start gap-10  px-7 bg-gray-200 border-gray-300">
            <button onClick={()=>{setexpand(!isexpand)}} className=" hover:bg-gray-400  w-[3rem]
            h-[3rem] flex justify-center items-center rounded-[50%]  transition-colors gap-1 flex-col">
                <div className=" w-[1.4rem] h-[3px] bg-black rounded-lg"></div>
                <div className=" w-[1.4rem] h-[3px] bg-black rounded-lg"></div>
                <div className=" w-[1.4rem] h-[3px] bg-black rounded-lg"></div>
            </button>
            {isexpand?(<div className="  min-h-[80vh] flex flex-col justify-between w-[15rem]  transition-all duration-500 " >
                <div className=" p-2 flex flex-col w-full items-start gap-3  ">
                    <button onClick={handlechange} className="w-[10rem] p-2 gap-8 h-[2.5rem] bg-gray-400 rounded-2xl flex justify-start items-center transition-all duration-300 bg-opacity-45">
                        <img src={plus_icon} width={20} height={20} className=""></img><p className="text-gray-400">New Chat</p>
                    </button>
                    <h1 className="text-lg font-[500]">
                        Recents
                    </h1>
                    {
                        revarr.map((item,index)=>{
                            return <button className=" bg-gray-300 hover:bg-gray-400  transition-all p-2 h-[2rem] flex items-start rounded-lg w-full" onClick={()=>{setpre(item)
                                run(item)}} key={index}>{`${item.slice(0,15)}...`}</button>
                        })
                    }



                </div>
                <div className="flex flex-col items-start gap-1 ">
                    <button className="w-full p-1 h-[2.5rem] hover:bg-gray-400 rounded-2xl flex 
                    gap-3 items-center "><img width={19} height={19} src={question_icon}/>
                    <p>Help</p>
                    </button>
                    <button className="w-full p-1 h-[2.5rem] hover:bg-gray-400 rounded-2xl flex gap-3 items-center "><img width={19} height={19} src={history_icon}/>
                    <p >History</p></button>
                    <button className="w-full p-1 h-[2.5rem] hover:bg-gray-400 rounded-2xl flex gap-3 items-center "><img width={19} height={19} src={setting_icon}/>
                    <p>Setting</p></button>
                </div>
            </div>):(<div className=" w-[3rem]  flex flex-col transition-all duration-500  min-h-[80vh] justify-between ">
                <div className="flex flex-col w-full items-center ">
                    <button className="w-[2.5rem] h-[2.5rem] bg-gray-400 rounded-[50%] flex justify-center items-center bg-opacity-45 transition-all duration-500">
                        <img src={plus_icon} width={20} height={20} className=""></img>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-1 ">
                    <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-400 rounded-[50%] flex justify-center items-center "><img width={19} height={19} src={question_icon}/></button>
                    <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-400 rounded-[50%] flex justify-center items-center "><img width={19} height={19} src={history_icon}/></button>
                    <button className="w-[2.5rem] h-[2.5rem] hover:bg-gray-400 rounded-[50%] flex justify-center items-center "><img width={19} height={19} src={setting_icon}/></button>
                </div>
            </div>)}
        </div>
    )
}
export default Sidebar;