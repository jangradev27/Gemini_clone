import { useContext } from "react";
import { AssestContext } from "../context/assestcontext";

function Navbar(){
    const{user_icon}=useContext(AssestContext);
    return (
        <div className="p-3  flex  justify-between ">
            <p className=" text-gray-400 text-2xl font-[500]">Gemini</p>
            <img src={user_icon} className=" rounded-[50%]" width={40} height={40}></img>
        </div>
    )
}
export default Navbar;